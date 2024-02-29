import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { VoteOption, WeightedVoteOption } from "./gov";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { TxRpc } from "../../../types";
export declare const protobufPackage = "govgen.gov.v1beta1";
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposal {
    content?: Any | undefined;
    initialDeposit: Coin[];
    proposer: string;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
    proposalId: bigint;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVote {
    proposalId: bigint;
    voter: string;
    option: VoteOption;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponse {
}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 *
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeighted {
    proposalId: bigint;
    voter: string;
    options: WeightedVoteOption[];
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 *
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedResponse {
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDeposit {
    proposalId: bigint;
    depositor: string;
    amount: Coin[];
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {
}
export declare const MsgSubmitProposal: {
    typeUrl: string;
    encode(message: MsgSubmitProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposal;
    fromJSON(object: any): MsgSubmitProposal;
    toJSON(message: MsgSubmitProposal): unknown;
    fromPartial<I extends {
        content?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        initialDeposit?: {
            denom?: string;
            amount?: string;
        }[];
        proposer?: string;
    } & {
        content?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["content"], keyof Any>, never>;
        initialDeposit?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["initialDeposit"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["initialDeposit"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        proposer?: string;
    } & Record<Exclude<keyof I, keyof MsgSubmitProposal>, never>>(object: I): MsgSubmitProposal;
};
export declare const MsgSubmitProposalResponse: {
    typeUrl: string;
    encode(message: MsgSubmitProposalResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposalResponse;
    fromJSON(object: any): MsgSubmitProposalResponse;
    toJSON(message: MsgSubmitProposalResponse): unknown;
    fromPartial<I extends {
        proposalId?: bigint;
    } & {
        proposalId?: bigint;
    } & Record<Exclude<keyof I, "proposalId">, never>>(object: I): MsgSubmitProposalResponse;
};
export declare const MsgVote: {
    typeUrl: string;
    encode(message: MsgVote, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgVote;
    fromJSON(object: any): MsgVote;
    toJSON(message: MsgVote): unknown;
    fromPartial<I extends {
        proposalId?: bigint;
        voter?: string;
        option?: VoteOption;
    } & {
        proposalId?: bigint;
        voter?: string;
        option?: VoteOption;
    } & Record<Exclude<keyof I, keyof MsgVote>, never>>(object: I): MsgVote;
};
export declare const MsgVoteResponse: {
    typeUrl: string;
    encode(_: MsgVoteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteResponse;
    fromJSON(_: any): MsgVoteResponse;
    toJSON(_: MsgVoteResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgVoteResponse;
};
export declare const MsgVoteWeighted: {
    typeUrl: string;
    encode(message: MsgVoteWeighted, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteWeighted;
    fromJSON(object: any): MsgVoteWeighted;
    toJSON(message: MsgVoteWeighted): unknown;
    fromPartial<I extends {
        proposalId?: bigint;
        voter?: string;
        options?: {
            option?: VoteOption;
            weight?: string;
        }[];
    } & {
        proposalId?: bigint;
        voter?: string;
        options?: {
            option?: VoteOption;
            weight?: string;
        }[] & ({
            option?: VoteOption;
            weight?: string;
        } & {
            option?: VoteOption;
            weight?: string;
        } & Record<Exclude<keyof I["options"][number], keyof WeightedVoteOption>, never>)[] & Record<Exclude<keyof I["options"], keyof {
            option?: VoteOption;
            weight?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof MsgVoteWeighted>, never>>(object: I): MsgVoteWeighted;
};
export declare const MsgVoteWeightedResponse: {
    typeUrl: string;
    encode(_: MsgVoteWeightedResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteWeightedResponse;
    fromJSON(_: any): MsgVoteWeightedResponse;
    toJSON(_: MsgVoteWeightedResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgVoteWeightedResponse;
};
export declare const MsgDeposit: {
    typeUrl: string;
    encode(message: MsgDeposit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeposit;
    fromJSON(object: any): MsgDeposit;
    toJSON(message: MsgDeposit): unknown;
    fromPartial<I extends {
        proposalId?: bigint;
        depositor?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        proposalId?: bigint;
        depositor?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["amount"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof MsgDeposit>, never>>(object: I): MsgDeposit;
};
export declare const MsgDepositResponse: {
    typeUrl: string;
    encode(_: MsgDepositResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositResponse;
    fromJSON(_: any): MsgDepositResponse;
    toJSON(_: MsgDepositResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgDepositResponse;
};
/** Msg defines the bank Msg service. */
export interface Msg {
    /** SubmitProposal defines a method to create new proposal given a content. */
    SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
    /** Vote defines a method to add a vote on a specific proposal. */
    Vote(request: MsgVote): Promise<MsgVoteResponse>;
    /**
     * VoteWeighted defines a method to add a weighted vote on a specific proposal.
     *
     * Since: cosmos-sdk 0.43
     */
    VoteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse>;
    /** Deposit defines a method to add deposit on a specific proposal. */
    Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
    Vote(request: MsgVote): Promise<MsgVoteResponse>;
    VoteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse>;
    Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
}
