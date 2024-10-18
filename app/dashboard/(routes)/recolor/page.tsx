// @ts-nocheck
// TODO :- Correct all the types
"use client";
import { PlusIcon } from "@radix-ui/react-icons";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";

export default function ExtractPage() {
  const [ogImageId, setOgImageId] = useState<any>();
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const [applyTransformation, setApplyTransformation] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false); // New state for loading effect
  const [object, setObject] = useState<string | undefined>("");
  const [color, setColor] = useState<string | undefined>("");
  const [objectPrompt, setObjectPrompt] = useState<string | undefined>("");
  const [colorPrompt, setColorPrompt] = useState<string | undefined>("");
  const [objectRequired, setObjectRequired] = useState<boolean>(false);
  const [colorRequired, setColorRequired] = useState<boolean>(false);


  const handleClick = () => {
    if(!object){
      setObjectRequired(true)
    }else if(!color){
      setColorRequired(true)
    }else{
      setObjectRequired(false)
      setColorRequired(false)
      setObjectPrompt(object); 
      setColorPrompt(color);
      console.log(color, object)

      setLoading(true);
      setTimeout(() => {
        setApplyTransformation(true);
        setLoading(false);
      }, 3000);
    }
  }

  return (
    <div className="flex justify-center">
      <div className="pl-5 pt-5 w-[50rem] mr-8 mb-8">
        <div className="flex-col items-start">
          <h3 className="font-bold text-3xl mb-3 md:mt-6">Extract Objects</h3>
          <p>Extract objects from images by just giving a prompt.</p>
        </div>

        {/* Input for Prompt */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row mt-7 gap-3 w-full">
            <div className="w-full md:w-1/2">
              <p className="font-semibold text-xl">Object to Recolor</p>
              <input
                type="text"
                className="shadow-lg rounded-lg border-2 p-3 w-full h-[46px]"
                placeholder="shoes"
                onChange={(e) => setObject(e.currentTarget.value)}
              />
              {
                objectRequired ? <p className="text-red-600">Required</p> : ''
              }
            </div>
            <div className="w-full md:w-1/2">
              <p className="font-semibold text-xl">Color</p>
              <input
                type="color"
                className="w-full shadow-lg rounded-lg p-[2px] border-2 h-[46px]"
                placeholder="hair"
                onChange={(e) => {
                  const color = e.currentTarget.value
                  const slicedColor = color.slice(1)
                  setColor(slicedColor)
                }}
              />
              {
                colorRequired ? <p className="text-red-600">Required</p> : ''
              }
            </div>
          </div>

          {/* Original and Transformed Image Sections */}
          <div className="w-full">
            <div className="md:flex w-full md:gap-6">
              <div className="w-full md:w-1/2">
                <p className="font-semibold text-xl mb-2">Original Image</p>
                <div className="h-[20rem] w-full border-2 shadow-lg rounded-lg flex justify-center items-center relative">
                  {isUploaded ? (
                    <CldImage
                      alt="uploaded-image"
                      src={ogImageId}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  ) : (
                    <CldUploadWidget
                      uploadPreset="pixalix"
                      onSuccess={(result: any, { widget }) => {
                        const publicId = result.info.public_id;
                        setOgImageId(publicId);
                        widget.close();
                        setIsUploaded(true);
                      }}
                    >
                      {({ open }) => (
                        <button
                          onClick={() => open()}
                          className="bg-blue-800 p-3 rounded-full text-xl text-white"
                        >
                          <PlusIcon />
                        </button>
                      )}
                    </CldUploadWidget>
                  )}
                </div>
              </div>

              <div className="w-full md:w-1/2 mt-7 md:mt-0">
                <p className="font-semibold text-xl mb-2">Transformed</p>
                <div className="h-[20rem] w-full border-2 shadow-lg rounded-lg flex justify-center items-center relative">
                  {loading ? (
                    <div className="loader">
                      <TailSpin
                        height="70"
                        width="70"
                        color="black"
                        ariaLabel="loading"
                      />
                    </div>
                  ) : applyTransformation ? (
                    <CldImage
                      alt="transformed-image"
                      src={ogImageId}
                      fill
                      style={{ objectFit: "contain" }}
                      recolor={{
                        prompt: objectPrompt,
                        to: colorPrompt,
                        multiple: false,
                      }}
                    />
                  ) : (
                    "Transformed Image"
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Button to Apply Transformation */}
          <button
            className="bg-blue-800 text-white p-4 rounded-full"
            onClick={handleClick}
            disabled={!isUploaded}
          >
            Recolor
          </button>
        </div>
      </div>
    </div>
  );
}
