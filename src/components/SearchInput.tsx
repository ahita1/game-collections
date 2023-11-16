import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      }}>
        <InputGroup>
            <InputLeftElement children={<BsSearch />} />
          <Input
            placeholder="Search Games... "
            borderRadius={20}
            variant="filled"
          />
            </InputGroup>
      </form>
  );
};

export default SearchInput;
