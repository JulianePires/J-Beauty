import Head from "next/head";
import { FaExternalLinkAlt } from "react-icons/fa";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Layout from "@components/Layout";
import Container from "@components/Container";

import styles from "@styles/Page.module.scss";

export default function Stores({ storeLocations }) {
  console.log(storeLocations)
  return (
    <Layout>
      <Head>
        <title>Stores</title>
        <meta name="description" content="You can find a store next to you" />
      </Head>

      <Container>
        <h1>Locations</h1>

        <div className={styles.stores}>
          <div className={styles.storesLocations}>
            <ul className={styles.locations}>
            {storeLocations?.map(location => (
              <li key={location.id}>
                <p className={styles.locationName}>{location.name}</p>
                <address>Address</address>
                <p>{location.phoneNumber}</p>
                <p className={styles.locationDiscovery}>
                  <button>View on Map</button>
                  <a
                    href={`https://www.google.com/maps/dir//${location.location.latitude},${location.location.longitude}/@${location.location.latitude},${location.location.longitude},12z/`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Directions
                    <FaExternalLinkAlt />
                  </a>
                </p>
              </li>
            ))}
            </ul>
          </div>

          <div className={styles.storesMap}>
            <div className={styles.storesMapContainer}>
              <div className={styles.map}>Map</div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri:
      "https://api-sa-east-1.hygraph.com/v2/cl66jhys4awc201t52k7463ow/master",
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query PageStores {
        storeLocations {
          id
          name
          phoneNumber
          address
          location {
            latitude
            longitude
          }
        }
      }
    `,
  });

  const storeLocations = data.data.storeLocations;

  return {
    props: {
      storeLocations,
    },
  };
}
