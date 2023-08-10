"use client";
import React from "react";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const CarCardDetails = ({ IsOpen, car, closeModal }) => {
    // console.log(IsOpen);
  return (
    <>
      <Transition appear show={IsOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease0in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25">
              <div className="fixed inset-0 overflow-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease0in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] rounded-2xl bg-white text-left overflow-y-auto shadow-xl transition-all flex flex-col gap-5">
                      <button type="button" onClick={closeModal} className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full" >
                        <Image
                          src="/close.svg"
                          alt="close"
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </button>
                      <div className="flex flex-1 flex-col gap-3">
                        <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                            <Image src='/logo.svg' fill className="object-contain" />
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarCardDetails;
