import React from "react";
import {
  Popover,
  PopoverTrigger as OrigPopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  useClipboard,
} from "@chakra-ui/react";

import { Link } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  header: string; 
  body: string;
};

const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

const InfoPopover = ({ children, header, body }: Props): JSX.Element => {
  const { hasCopied, onCopy } = useClipboard(body);

  return (
    <>
      <Popover>
        <PopoverTrigger>{children}</PopoverTrigger>
        <PopoverContent bg="#262626" color="white">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader fontWeight="bold"> {header} </PopoverHeader>
          <PopoverBody d="flex" justifyContent="space-between">
            <Link href={"https://" + body} isExternal>
              {body}
            </Link>
            <Button size="sm" color="black" onClick={onCopy} ml={2}>
              {hasCopied ? "Copied" : "Copy"}
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default InfoPopover;
