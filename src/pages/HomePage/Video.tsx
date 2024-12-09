import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const VideoUploader = () => {
  const [video, setVideo] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  console.log("video",video)

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setVideo(file);
      setVideoPreview(URL.createObjectURL(file)); 
    }
  };

  const handleRemoveVideo = () => {
    if (videoPreview) {
      URL.revokeObjectURL(videoPreview); 
    }
    setVideo(null);
    setVideoPreview(null);

  
    const inputElement = document.getElementById('video-upload') as HTMLInputElement;
    if (inputElement) {
      inputElement.value = ''; 
    }
  };

  return (
    <div>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 lg:w-1/2">
        {videoPreview ? (
          <div className="relative">
            <video
              src={videoPreview}
              controls
              className="w-full h-48 object-contain rounded"
            />
            <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow cursor-pointer">
              <button
                onClick={handleRemoveVideo}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                X
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <p className="text-sm">No video selected</p>
          </div>
        )}
      </div>
      <label className="block mt-4">
        <input
          type="file"
          accept="video/mp4,video/x-m4v,video/*"
          onChange={handleVideoUpload}
          className="hidden"
          id="video-upload"
        />
        <span className="cursor-pointer inline-flex items-center px-4 py-2 bg-meta-11 text-white font-semibold rounded-md hover:bg-meta-12 focus:ring-2 focus:ring-orange-300">
          Pick Video
        </span>
      </label>
      <p className="mt-2 text-sm text-gray-500">
        Note: Accepted formats - Videos (.mp4, .avi, .mov)
      </p>
    </div>
  );
};

const Video = () => {
  return (
    <>
      <Breadcrumb pageName="Home - Video Banner" breadcrumLink="Video Banner" />
      <div className="grid grid-cols-1 gap-9">
        <div className="flex flex-col gap-9">
          {/* Contact Form */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Title
                    </label>
                    <input
                      type="text"
                      placeholder="Title"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Sub Title
                    </label>
                    <input
                      type="text"
                      placeholder="Sub Title"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Short Description
                  </label>
                  <textarea
                    rows={1}
                    placeholder="Short Description"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                {/* Video Uploader */}
                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Video<span className="text-danger">*</span>
                  </label>
                  <VideoUploader />
                </div>

                <div className="mb-8 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                    Button Text
                    </label>
                    <input
                      type="text"
                      placeholder="Button Text"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                    Button URL
                    </label>
                    <input
                      type="text"
                      placeholder="Button URL"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex gap-6">
                  <button className="flex lg:w-1/6 w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                    Submit
                  </button>
                  <button className="flex lg:w-1/6 w-full justify-center rounded bg-graydark p-3 font-medium text-gray hover:bg-opacity-90">
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
