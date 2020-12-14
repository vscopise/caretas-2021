import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
import LoadingImage from '../assets/icons/loading-image';

const FeaturedMedia = ({ state, id, size }) => {
  const media = state.source.attachment[id];

  if (!media) return (<Container><LoadingImage size={size} /></Container>);

  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map((item) => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;

  return (
    <Container size={size}>
      <StyledImage
        alt={media.title.rendered}
        src={media.source_url}
        srcSet={srcset}
      />
    </Container>
  );
};

export default connect(FeaturedMedia);

const Container = styled.div`
  height: ${props => props.size}px;
`;

const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
