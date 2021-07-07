import tw, { styled } from 'twin.macro'

export const Container = styled.section`
  ${tw`relative flex items-center justify-center`}
`

export const Content = styled.div`
  ${tw`px-4 py-8 max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center md:space-x-16`}

  .texts {
    ${tw`flex flex-col items-center space-y-8 md:w-2/5`};

    h1 {
      ${tw`font-bold text-4xl text-center leading-10`};
      text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
      background: #833184;
      background: -webkit-linear-gradient(to top, #833184 0%, #e9018c 100%);
      background: -moz-linear-gradient(to top, #833184 0%, #e9018c 100%);
      background: linear-gradient(to top, #833184 0%, #e9018c 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .buttons {
      ${tw`grid grid-cols-2 gap-4`};
      a {
        ${tw`w-40 h-12 relative block`};
      }
    }
  }

  .device {
    ${tw`relative w-1/2 sm:w-1/3 md:w-52 h-80 md:h-96 flex justify-center items-center z-0`};

    > img {
      ${tw`h-80 md:h-96 mx-auto z-10 absolute`};
    }

    span {
      ${tw`absolute h-16 w-16 rounded-full shadow-md flex items-center justify-center z-10 bg-purple-500`};
      background: -webkit-linear-gradient(
        358.11deg,
        #ec008c 1.58%,
        #833184 45.93%,
        #833184 98.44%
      );
      background: -moz-linear-gradient(
        358.11deg,
        #ec008c 1.58%,
        #833184 45.93%,
        #833184 98.44%
      );
      background: linear-gradient(
        358.11deg,
        #ec008c 1.58%,
        #833184 45.93%,
        #833184 98.44%
      );

      &.cart {
        ${tw`z-0`};
      }

      &.tag {
        ${tw`top-12`};
      }

      &.piggy {
        ${tw`bottom-8`};
      }

      &.burguer {
        ${tw`bottom-12`};
      }

      img {
        ${tw`h-8`};
      }
    }
  }
`
