"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
/* eslint-disable */
const gov_1 = require("./gov");
exports.AminoConverter = {
    "/govgen.gov.v1beta1.MsgSubmitProposal": {
        aminoType: "cosmos-sdk/MsgSubmitProposal",
        toAmino: ({ content, initialDeposit, proposer, }) => {
            return {
                content: {
                    type_url: content.typeUrl,
                    value: content.value,
                },
                initial_deposit: initialDeposit.map((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
                proposer,
            };
        },
        fromAmino: ({ content, initial_deposit, proposer, }) => {
            return {
                content: {
                    typeUrl: content.type_url,
                    value: content.value,
                },
                initialDeposit: initial_deposit.map((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
                proposer,
            };
        },
    },
    "/govgen.gov.v1beta1.MsgVote": {
        aminoType: "cosmos-sdk/MsgVote",
        toAmino: ({ proposalId, voter, option }) => {
            return {
                proposal_id: proposalId.toString(),
                voter,
                option,
            };
        },
        fromAmino: ({ proposal_id, voter, option }) => {
            return {
                proposalId: BigInt(proposal_id),
                voter,
                option: (0, gov_1.voteOptionFromJSON)(option),
            };
        },
    },
    "/govgen.gov.v1beta1.MsgVoteWeighted": {
        aminoType: "cosmos-sdk/MsgVoteWeighted",
        toAmino: ({ proposalId, voter, options }) => {
            return {
                proposal_id: proposalId.toString(),
                voter,
                options: options.map((el0) => ({
                    option: el0.option,
                    weight: el0.weight,
                })),
            };
        },
        fromAmino: ({ proposal_id, voter, options }) => {
            return {
                proposalId: BigInt(proposal_id),
                voter,
                options: options.map((el0) => ({
                    option: (0, gov_1.voteOptionFromJSON)(el0.option),
                    weight: el0.weight,
                })),
            };
        },
    },
    "/govgen.gov.v1beta1.MsgDeposit": {
        aminoType: "cosmos-sdk/MsgDeposit",
        toAmino: ({ proposalId, depositor, amount }) => {
            return {
                proposal_id: proposalId.toString(),
                depositor,
                amount: amount.map((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
            };
        },
        fromAmino: ({ proposal_id, depositor, amount }) => {
            return {
                proposalId: BigInt(proposal_id),
                depositor,
                amount: amount.map((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map