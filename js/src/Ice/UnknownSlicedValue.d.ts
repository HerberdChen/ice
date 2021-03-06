// **********************************************************************
//
// Copyright (c) 2003-2018 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************

declare module "ice"
{
    namespace Ice
    {
        /**
         * Encapsulates the details of a slice for an unknown class or exception type.
         */
        class SliceInfo
        {
            /**
             * The Slice type ID for this slice.
             */
            typeId:string;

            /**
             * The Slice compact type ID for this slice.
             */
            compactId:number;

            /**
             * The encoded bytes for this slice, including the leading size integer.
             */
            bytes:Uint8Array;

            /**
             * The class instances referenced by this slice.
             */
            instances:Value[];

            /**
             * Whether or not the slice contains optional members.
             */
            hasOptionalMembers:boolean;

            /**
             * Whether or not this is the last slice.
             */
            isLastSlice:boolean;
        }

        /**
         * Holds the slices of unknown types.
         */
        class SlicedData
        {
            /**
             * The slices of unknown types.
             */
            slices:SliceInfo[];
        }

        class UnknownSlicedValue extends Ice.Value
        {
            constructor(unknownTypeId:string);

            ice_getSlicedData():SlicedData;
            ice_id():string;
        }
    }
}
