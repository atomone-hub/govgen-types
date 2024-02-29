/* eslint-disable */
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgSubmitProposal, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [
  ["/govgen.gov.v1beta1.MsgSubmitProposal", MsgSubmitProposal],
  ["/govgen.gov.v1beta1.MsgVote", MsgVote],
  ["/govgen.gov.v1beta1.MsgVoteWeighted", MsgVoteWeighted],
  ["/govgen.gov.v1beta1.MsgDeposit", MsgDeposit],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/govgen.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.encode(value).finish(),
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/govgen.gov.v1beta1.MsgVote",
        value: MsgVote.encode(value).finish(),
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/govgen.gov.v1beta1.MsgVoteWeighted",
        value: MsgVoteWeighted.encode(value).finish(),
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/govgen.gov.v1beta1.MsgDeposit",
        value: MsgDeposit.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/govgen.gov.v1beta1.MsgSubmitProposal",
        value,
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/govgen.gov.v1beta1.MsgVote",
        value,
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/govgen.gov.v1beta1.MsgVoteWeighted",
        value,
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/govgen.gov.v1beta1.MsgDeposit",
        value,
      };
    },
  },
  toJSON: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/govgen.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.toJSON(value),
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/govgen.gov.v1beta1.MsgVote",
        value: MsgVote.toJSON(value),
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/govgen.gov.v1beta1.MsgVoteWeighted",
        value: MsgVoteWeighted.toJSON(value),
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/govgen.gov.v1beta1.MsgDeposit",
        value: MsgDeposit.toJSON(value),
      };
    },
  },
  fromJSON: {
    submitProposal(value: any) {
      return {
        typeUrl: "/govgen.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromJSON(value),
      };
    },
    vote(value: any) {
      return {
        typeUrl: "/govgen.gov.v1beta1.MsgVote",
        value: MsgVote.fromJSON(value),
      };
    },
    voteWeighted(value: any) {
      return {
        typeUrl: "/govgen.gov.v1beta1.MsgVoteWeighted",
        value: MsgVoteWeighted.fromJSON(value),
      };
    },
    deposit(value: any) {
      return {
        typeUrl: "/govgen.gov.v1beta1.MsgDeposit",
        value: MsgDeposit.fromJSON(value),
      };
    },
  },
  fromPartial: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/govgen.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromPartial(value),
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/govgen.gov.v1beta1.MsgVote",
        value: MsgVote.fromPartial(value),
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/govgen.gov.v1beta1.MsgVoteWeighted",
        value: MsgVoteWeighted.fromPartial(value),
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/govgen.gov.v1beta1.MsgDeposit",
        value: MsgDeposit.fromPartial(value),
      };
    },
  },
};
