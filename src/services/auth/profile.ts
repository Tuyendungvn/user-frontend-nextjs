import { graphQLCommon } from "@common/utils/api";
import { gql } from "apollo-boost";
import { IUpdateUserPassword, IUpdateUserProfile } from "@common/typings";

const REFRESH_TOKEN = gql`
  query {
    refreshToken {
      accessToken
      refreshToken
      userInfo {
        _id
        birthday
        gender
        permission
        title
        history
        email
        username
        displayName
        urlAvt {
          default
        }
        email
        phoneNumber
        appliedRecruitment {
          recruitment {
            _id
            slug
          }
          date
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

export const refreshToken = async () => {
  const result = await graphQLCommon(REFRESH_TOKEN, {});
  return result;
};

const UPDATE_USER_PASSWORD = gql`
  mutation($updatePasswordInput: UpdatePasswordInput!) {
    updateUserPassword(updatePasswordInput: $updatePasswordInput) {
      _id
      username
    }
  }
`;

export const updateUserPassword = async (variables: IUpdateUserPassword) => {
  const result = await graphQLCommon(UPDATE_USER_PASSWORD, variables);
  return result;
};

const UPDATE_USER_PROFILE = gql`
  mutation($updateUserInput: UpdateUserInput!) {
    updateUserProfile(updateUserInput: $updateUserInput) {
      _id
      username
    }
  }
`;

export const updateUserProfile = async (variables: IUpdateUserProfile) => {
  const result = await graphQLCommon(UPDATE_USER_PROFILE, variables);
  return result;
};
