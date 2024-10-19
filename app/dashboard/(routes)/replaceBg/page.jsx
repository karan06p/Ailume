"use client";
import { PlusIcon } from "@radix-ui/react-icons";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";

export default function ExtractPage() {
  const [ogImageId, setOgImageId] = useState();
  const [isUploaded, setIsUploaded] = useState(false);
  const [applyTransformation, setApplyTransformation] = useState(false);
  const [prompt, setPrompt] = useState();
  const [promptValue, setPromptValue] = useState();
  const [loading, setLoading] = useState(false);
  const [showRequired, setShowRequired] = useState(false);

  const handleClick = () => {
    if (!promptValue) {
      setShowRequired(true);
    } else {
      setShowRequired(false);
      setLoading(true);
        setPrompt(promptValue);
        setApplyTransformation(true);      
      setTimeout(() => {

        setLoading(false);
      }, 5000);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="pl-5 pt-5 w-[50rem] mr-8 mb-8">
        <div className="flex-col items-start">
          <h3 className="font-bold text-3xl mb-3 md:mt-6">Replace Background</h3>
          <p>Replace background of your image by just giving a prompt.</p>
        </div>

        {/* Input for Prompt */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col mt-7 gap-3">
            <p className="font-semibold text-xl">Prompt</p>
            <input
              type="text"
              className="w-auto shadow-lg rounded-lg border-2 p-3"
              onChange={(e) => setPromptValue(e.currentTarget.value)}
              placeholder="an empty beach"
            />
            {showRequired ? (
              <p className="text-red-600 font-medium">Required</p>
            ) : (
              ""
            )}
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
                      onSuccess={(result , { widget }) => {
                        const publicId = result?.info?.public_id
                        setOgImageId(publicId);
                        widget.close();
                        setIsUploaded(true);
                      }}
                    >
                      {({ open }) => (
                        <button
                          onClick={() => open()}
                          className="bg-blue-800 p-3 text-xl rounded-full text-white"
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
                    </div> // Loading spinner
                  ) : applyTransformation ? (
                    <CldImage
                      alt="transformed-image"
                      src={ogImageId}
                      fill
                      style={{ objectFit: "contain" }}
                      replaceBackground={prompt}
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
            Replace 
          </button>
        </div>
      </div>
    </div>
  );
}
