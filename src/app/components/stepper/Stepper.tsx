'use client';

import { Separator } from '@radix-ui/react-separator';
import React, { useEffect, useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa';

interface Step {
    title: string;
    isCurrent: boolean;
    isSuccess: boolean;
}

interface Props {
    steps: string[],
    currentStep: number;
}

export const Stepper = ({ steps: stepsText, currentStep }: Props) => {


    const [steps, setSteps] = useState<Step[]>(() => {
        return stepsText.map<Step>((stepText, index) => {
            return {
                title: stepText,
                isCurrent: (currentStep == index) ? true : false,
                isSuccess: false
            }
        });
    });

    useEffect(() => {
        setSteps((steps) => steps.map(
            (step, i) => ({
                title: step.title,
                isCurrent: (currentStep == i) ? true : false,
                isSuccess: (i < currentStep) ? true : false
            })
        ));
        return () => {
        }
    }, [currentStep])

    return (
        <div className='flex gap-2 justify-center overflow-x-auto'>
            {
                steps.map((step, i) => (
                    <div key={step.title} className='flex gap-2 items-center'>
                        <div className='h-8 w-8'>
                            {
                                step.isSuccess
                                    ? <FaCheckCircle width={200} height={200} className={`w-full h-full aspect-square max-h-8 font-semibold text-blue-500/90 `} />
                                    : <div className={`rounded-full  aspect-square w-full h-full flex justify-center items-center ${step.isCurrent ? 'font-bold text-white bg-blue-500' : 'bg-gray-400 text-gray-200'}`}>{i + 1}</div>}
                        </div>
                        <p className={` max-w-28 ${step.isCurrent ? 'font-bold' : ''}`}>
                            {step.title}
                        </p>
                        {
                            i < steps.length-1 
                                &&
                            <Separator className={`w-10 border border-blue-500 `} />
                        }
                    </div>
                ))
            }
        </div>
    )
}
