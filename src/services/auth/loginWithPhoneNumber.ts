import { ILoginInput } from "@common/typings";
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { gql } from "apollo-boost";
import { graphQLCommon } from "@common/utils/api";

const LOGIN_WITH_USERNAME = gql`
  mutation($user: LoginUserInput!) {
    login(user: $user) {
      accessToken
      refreshToken
      userInfo {
        _id
        provider
        birthday
        gender
        permission
        title
        username
        email
        phoneNumber
        displayName
        urlAvt {
          default
        }
        identityCard
        appliedRecruitment {
          recruitment {
            _id
            slug
          }
        }
        savedRecruitment {
          _id
          slug
        }
        subscribedCompany {
          _id
          name
        }
        seenCompany {
          name
        }
        code
        point
        province {
          _id
          name
        }
        district {
          _id
          name
        }
        ward {
          _id
          name
        }
        street {
          _id
          name
        }
        career {
          _id
          name
        }
        isSeekingJob
      }
    }
  }
`;
export const loginWithPhoneNumber = async (variables: ILoginInput) => {
  const result = await graphQLCommon(LOGIN_WITH_USERNAME, variables);
  return result;
};
