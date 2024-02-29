import { ProposalStatus, Proposal, Vote, VotingParams, DepositParams, TallyParams, Deposit, TallyResult } from "./gov";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { TxRpc } from "../../../types";
export declare const protobufPackage = "govgen.gov.v1beta1";
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponse {
    proposal: Proposal | undefined;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequest {
    /** proposal_status defines the status of the proposals. */
    proposalStatus: ProposalStatus;
    /** voter defines the voter address for the proposals. */
    voter: string;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponse {
    proposals: Proposal[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
    /** voter defines the oter address for the proposals. */
    voter: string;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponse {
    /** vote defined the queried vote. */
    vote: Vote | undefined;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponse {
    /** votes defined the queried votes. */
    votes: Vote[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
    /**
     * params_type defines which parameters to query for, can be one of "voting",
     * "tallying" or "deposit".
     */
    paramsType: string;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** voting_params defines the parameters related to voting. */
    votingParams: VotingParams | undefined;
    /** deposit_params defines the parameters related to deposit. */
    depositParams: DepositParams | undefined;
    /** tally_params defines the parameters related to tally. */
    tallyParams: TallyParams | undefined;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponse {
    /** deposit defines the requested deposit. */
    deposit: Deposit | undefined;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
    deposits: Deposit[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponse {
    /** tally defines the requested tally. */
    tally: TallyResult | undefined;
}
export declare const QueryProposalRequest: {
    typeUrl: string;
    encode(message: QueryProposalRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalRequest;
    fromJSON(object: any): QueryProposalRequest;
    toJSON(message: QueryProposalRequest): unknown;
    fromPartial<I extends {
        proposalId?: bigint;
    } & {
        proposalId?: bigint;
    } & Record<Exclude<keyof I, "proposalId">, never>>(object: I): QueryProposalRequest;
};
export declare const QueryProposalResponse: {
    typeUrl: string;
    encode(message: QueryProposalResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalResponse;
    fromJSON(object: any): QueryProposalResponse;
    toJSON(message: QueryProposalResponse): unknown;
    fromPartial<I extends {
        proposal?: {
            proposalId?: bigint;
            content?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            status?: ProposalStatus;
            finalTallyResult?: {
                yes?: string;
                abstain?: string;
                no?: string;
                noWithVeto?: string;
            };
            submitTime?: {
                seconds?: bigint;
                nanos?: number;
            };
            depositEndTime?: {
                seconds?: bigint;
                nanos?: number;
            };
            totalDeposit?: {
                denom?: string;
                amount?: string;
            }[];
            votingStartTime?: {
                seconds?: bigint;
                nanos?: number;
            };
            votingEndTime?: {
                seconds?: bigint;
                nanos?: number;
            };
        };
    } & {
        proposal?: {
            proposalId?: bigint;
            content?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            status?: ProposalStatus;
            finalTallyResult?: {
                yes?: string;
                abstain?: string;
                no?: string;
                noWithVeto?: string;
            };
            submitTime?: {
                seconds?: bigint;
                nanos?: number;
            };
            depositEndTime?: {
                seconds?: bigint;
                nanos?: number;
            };
            totalDeposit?: {
                denom?: string;
                amount?: string;
            }[];
            votingStartTime?: {
                seconds?: bigint;
                nanos?: number;
            };
            votingEndTime?: {
                seconds?: bigint;
                nanos?: number;
            };
        } & {
            proposalId?: bigint;
            content?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["proposal"]["content"], keyof import("../../../google/protobuf/any").Any>, never>;
            status?: ProposalStatus;
            finalTallyResult?: {
                yes?: string;
                abstain?: string;
                no?: string;
                noWithVeto?: string;
            } & {
                yes?: string;
                abstain?: string;
                no?: string;
                noWithVeto?: string;
            } & Record<Exclude<keyof I["proposal"]["finalTallyResult"], keyof TallyResult>, never>;
            submitTime?: {
                seconds?: bigint;
                nanos?: number;
            } & {
                seconds?: bigint;
                nanos?: number;
            } & Record<Exclude<keyof I["proposal"]["submitTime"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>;
            depositEndTime?: {
                seconds?: bigint;
                nanos?: number;
            } & {
                seconds?: bigint;
                nanos?: number;
            } & Record<Exclude<keyof I["proposal"]["depositEndTime"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>;
            totalDeposit?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["proposal"]["totalDeposit"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["proposal"]["totalDeposit"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            votingStartTime?: {
                seconds?: bigint;
                nanos?: number;
            } & {
                seconds?: bigint;
                nanos?: number;
            } & Record<Exclude<keyof I["proposal"]["votingStartTime"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>;
            votingEndTime?: {
                seconds?: bigint;
                nanos?: number;
            } & {
                seconds?: bigint;
                nanos?: number;
            } & Record<Exclude<keyof I["proposal"]["votingEndTime"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>;
        } & Record<Exclude<keyof I["proposal"], keyof Proposal>, never>;
    } & Record<Exclude<keyof I, "proposal">, never>>(object: I): QueryProposalResponse;
};
export declare const QueryProposalsRequest: {
    typeUrl: string;
    encode(message: QueryProposalsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsRequest;
    fromJSON(object: any): QueryProposalsRequest;
    toJSON(message: QueryProposalsRequest): unknown;
    fromPartial<I extends {
        proposalStatus?: ProposalStatus;
        voter?: string;
        depositor?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: bigint;
            limit?: bigint;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        proposalStatus?: ProposalStatus;
        voter?: string;
        depositor?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: bigint;
            limit?: bigint;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: bigint;
            limit?: bigint;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryProposalsRequest>, never>>(object: I): QueryProposalsRequest;
};
export declare const QueryProposalsResponse: {
    typeUrl: string;
    encode(message: QueryProposalsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsResponse;
    fromJSON(object: any): QueryProposalsResponse;
    toJSON(message: QueryProposalsResponse): unknown;
    fromPartial<I extends {
        proposals?: {
            proposalId?: bigint;
            content?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            status?: ProposalStatus;
            finalTallyResult?: {
                yes?: string;
                abstain?: string;
                no?: string;
                noWithVeto?: string;
            };
            submitTime?: {
                seconds?: bigint;
                nanos?: number;
            };
            depositEndTime?: {
                seconds?: bigint;
                nanos?: number;
            };
            totalDeposit?: {
                denom?: string;
                amount?: string;
            }[];
            votingStartTime?: {
                seconds?: bigint;
                nanos?: number;
            };
            votingEndTime?: {
                seconds?: bigint;
                nanos?: number;
            };
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: bigint;
        };
    } & {
        proposals?: {
            proposalId?: bigint;
            content?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            status?: ProposalStatus;
            finalTallyResult?: {
                yes?: string;
                abstain?: string;
                no?: string;
                noWithVeto?: string;
            };
            submitTime?: {
                seconds?: bigint;
                nanos?: number;
            };
            depositEndTime?: {
                seconds?: bigint;
                nanos?: number;
            };
            totalDeposit?: {
                denom?: string;
                amount?: string;
            }[];
            votingStartTime?: {
                seconds?: bigint;
                nanos?: number;
            };
            votingEndTime?: {
                seconds?: bigint;
                nanos?: number;
            };
        }[] & ({
            proposalId?: bigint;
            content?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            status?: ProposalStatus;
            finalTallyResult?: {
                yes?: string;
                abstain?: string;
                no?: string;
                noWithVeto?: string;
            };
            submitTime?: {
                seconds?: bigint;
                nanos?: number;
            };
            depositEndTime?: {
                seconds?: bigint;
                nanos?: number;
            };
            totalDeposit?: {
                denom?: string;
                amount?: string;
            }[];
            votingStartTime?: {
                seconds?: bigint;
                nanos?: number;
            };
            votingEndTime?: {
                seconds?: bigint;
                nanos?: number;
            };
        } & {
            proposalId?: bigint;
            content?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["proposals"][number]["content"], keyof import("../../../google/protobuf/any").Any>, never>;
            status?: ProposalStatus;
            finalTallyResult?: {
                yes?: string;
                abstain?: string;
                no?: string;
                noWithVeto?: string;
            } & {
                yes?: string;
                abstain?: string;
                no?: string;
                noWithVeto?: string;
            } & Record<Exclude<keyof I["proposals"][number]["finalTallyResult"], keyof TallyResult>, never>;
            submitTime?: {
                seconds?: bigint;
                nanos?: number;
            } & {
                seconds?: bigint;
                nanos?: number;
            } & Record<Exclude<keyof I["proposals"][number]["submitTime"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>;
            depositEndTime?: {
                seconds?: bigint;
                nanos?: number;
            } & {
                seconds?: bigint;
                nanos?: number;
            } & Record<Exclude<keyof I["proposals"][number]["depositEndTime"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>;
            totalDeposit?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["proposals"][number]["totalDeposit"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["proposals"][number]["totalDeposit"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            votingStartTime?: {
                seconds?: bigint;
                nanos?: number;
            } & {
                seconds?: bigint;
                nanos?: number;
            } & Record<Exclude<keyof I["proposals"][number]["votingStartTime"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>;
            votingEndTime?: {
                seconds?: bigint;
                nanos?: number;
            } & {
                seconds?: bigint;
                nanos?: number;
            } & Record<Exclude<keyof I["proposals"][number]["votingEndTime"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>;
        } & Record<Exclude<keyof I["proposals"][number], keyof Proposal>, never>)[] & Record<Exclude<keyof I["proposals"], keyof {
            proposalId?: bigint;
            content?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            status?: ProposalStatus;
            finalTallyResult?: {
                yes?: string;
                abstain?: string;
                no?: string;
                noWithVeto?: string;
            };
            submitTime?: {
                seconds?: bigint;
                nanos?: number;
            };
            depositEndTime?: {
                seconds?: bigint;
                nanos?: number;
            };
            totalDeposit?: {
                denom?: string;
                amount?: string;
            }[];
            votingStartTime?: {
                seconds?: bigint;
                nanos?: number;
            };
            votingEndTime?: {
                seconds?: bigint;
                nanos?: number;
            };
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: bigint;
        } & {
            nextKey?: Uint8Array;
            total?: bigint;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryProposalsResponse>, never>>(object: I): QueryProposalsResponse;
};
export declare const QueryVoteRequest: {
    typeUrl: string;
    encode(message: QueryVoteRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteRequest;
    fromJSON(object: any): QueryVoteRequest;
    toJSON(message: QueryVoteRequest): unknown;
    fromPartial<I extends {
        proposalId?: bigint;
        voter?: string;
    } & {
        proposalId?: bigint;
        voter?: string;
    } & Record<Exclude<keyof I, keyof QueryVoteRequest>, never>>(object: I): QueryVoteRequest;
};
export declare const QueryVoteResponse: {
    typeUrl: string;
    encode(message: QueryVoteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteResponse;
    fromJSON(object: any): QueryVoteResponse;
    toJSON(message: QueryVoteResponse): unknown;
    fromPartial<I extends {
        vote?: {
            proposalId?: bigint;
            voter?: string;
            option?: import("./gov").VoteOption;
            options?: {
                option?: import("./gov").VoteOption;
                weight?: string;
            }[];
        };
    } & {
        vote?: {
            proposalId?: bigint;
            voter?: string;
            option?: import("./gov").VoteOption;
            options?: {
                option?: import("./gov").VoteOption;
                weight?: string;
            }[];
        } & {
            proposalId?: bigint;
            voter?: string;
            option?: import("./gov").VoteOption;
            options?: {
                option?: import("./gov").VoteOption;
                weight?: string;
            }[] & ({
                option?: import("./gov").VoteOption;
                weight?: string;
            } & {
                option?: import("./gov").VoteOption;
                weight?: string;
            } & Record<Exclude<keyof I["vote"]["options"][number], keyof import("./gov").WeightedVoteOption>, never>)[] & Record<Exclude<keyof I["vote"]["options"], keyof {
                option?: import("./gov").VoteOption;
                weight?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["vote"], keyof Vote>, never>;
    } & Record<Exclude<keyof I, "vote">, never>>(object: I): QueryVoteResponse;
};
export declare const QueryVotesRequest: {
    typeUrl: string;
    encode(message: QueryVotesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesRequest;
    fromJSON(object: any): QueryVotesRequest;
    toJSON(message: QueryVotesRequest): unknown;
    fromPartial<I extends {
        proposalId?: bigint;
        pagination?: {
            key?: Uint8Array;
            offset?: bigint;
            limit?: bigint;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        proposalId?: bigint;
        pagination?: {
            key?: Uint8Array;
            offset?: bigint;
            limit?: bigint;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: bigint;
            limit?: bigint;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryVotesRequest>, never>>(object: I): QueryVotesRequest;
};
export declare const QueryVotesResponse: {
    typeUrl: string;
    encode(message: QueryVotesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesResponse;
    fromJSON(object: any): QueryVotesResponse;
    toJSON(message: QueryVotesResponse): unknown;
    fromPartial<I extends {
        votes?: {
            proposalId?: bigint;
            voter?: string;
            option?: import("./gov").VoteOption;
            options?: {
                option?: import("./gov").VoteOption;
                weight?: string;
            }[];
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: bigint;
        };
    } & {
        votes?: {
            proposalId?: bigint;
            voter?: string;
            option?: import("./gov").VoteOption;
            options?: {
                option?: import("./gov").VoteOption;
                weight?: string;
            }[];
        }[] & ({
            proposalId?: bigint;
            voter?: string;
            option?: import("./gov").VoteOption;
            options?: {
                option?: import("./gov").VoteOption;
                weight?: string;
            }[];
        } & {
            proposalId?: bigint;
            voter?: string;
            option?: import("./gov").VoteOption;
            options?: {
                option?: import("./gov").VoteOption;
                weight?: string;
            }[] & ({
                option?: import("./gov").VoteOption;
                weight?: string;
            } & {
                option?: import("./gov").VoteOption;
                weight?: string;
            } & Record<Exclude<keyof I["votes"][number]["options"][number], keyof import("./gov").WeightedVoteOption>, never>)[] & Record<Exclude<keyof I["votes"][number]["options"], keyof {
                option?: import("./gov").VoteOption;
                weight?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["votes"][number], keyof Vote>, never>)[] & Record<Exclude<keyof I["votes"], keyof {
            proposalId?: bigint;
            voter?: string;
            option?: import("./gov").VoteOption;
            options?: {
                option?: import("./gov").VoteOption;
                weight?: string;
            }[];
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: bigint;
        } & {
            nextKey?: Uint8Array;
            total?: bigint;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryVotesResponse>, never>>(object: I): QueryVotesResponse;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(message: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(object: any): QueryParamsRequest;
    toJSON(message: QueryParamsRequest): unknown;
    fromPartial<I extends {
        paramsType?: string;
    } & {
        paramsType?: string;
    } & Record<Exclude<keyof I, "paramsType">, never>>(object: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends {
        votingParams?: {
            votingPeriodDefault?: {
                seconds?: bigint;
                nanos?: number;
            };
            votingPeriodParameterChange?: {
                seconds?: bigint;
                nanos?: number;
            };
            votingPeriodSoftwareUpgrade?: {
                seconds?: bigint;
                nanos?: number;
            };
            votingPeriodText?: {
                seconds?: bigint;
                nanos?: number;
            };
        };
        depositParams?: {
            minDeposit?: {
                denom?: string;
                amount?: string;
            }[];
            maxDepositPeriod?: {
                seconds?: bigint;
                nanos?: number;
            };
        };
        tallyParams?: {
            quorum?: Uint8Array;
            threshold?: Uint8Array;
            vetoThreshold?: Uint8Array;
        };
    } & {
        votingParams?: {
            votingPeriodDefault?: {
                seconds?: bigint;
                nanos?: number;
            };
            votingPeriodParameterChange?: {
                seconds?: bigint;
                nanos?: number;
            };
            votingPeriodSoftwareUpgrade?: {
                seconds?: bigint;
                nanos?: number;
            };
            votingPeriodText?: {
                seconds?: bigint;
                nanos?: number;
            };
        } & {
            votingPeriodDefault?: {
                seconds?: bigint;
                nanos?: number;
            } & {
                seconds?: bigint;
                nanos?: number;
            } & Record<Exclude<keyof I["votingParams"]["votingPeriodDefault"], keyof import("../../../google/protobuf/duration").Duration>, never>;
            votingPeriodParameterChange?: {
                seconds?: bigint;
                nanos?: number;
            } & {
                seconds?: bigint;
                nanos?: number;
            } & Record<Exclude<keyof I["votingParams"]["votingPeriodParameterChange"], keyof import("../../../google/protobuf/duration").Duration>, never>;
            votingPeriodSoftwareUpgrade?: {
                seconds?: bigint;
                nanos?: number;
            } & {
                seconds?: bigint;
                nanos?: number;
            } & Record<Exclude<keyof I["votingParams"]["votingPeriodSoftwareUpgrade"], keyof import("../../../google/protobuf/duration").Duration>, never>;
            votingPeriodText?: {
                seconds?: bigint;
                nanos?: number;
            } & {
                seconds?: bigint;
                nanos?: number;
            } & Record<Exclude<keyof I["votingParams"]["votingPeriodText"], keyof import("../../../google/protobuf/duration").Duration>, never>;
        } & Record<Exclude<keyof I["votingParams"], keyof VotingParams>, never>;
        depositParams?: {
            minDeposit?: {
                denom?: string;
                amount?: string;
            }[];
            maxDepositPeriod?: {
                seconds?: bigint;
                nanos?: number;
            };
        } & {
            minDeposit?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["depositParams"]["minDeposit"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["depositParams"]["minDeposit"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            maxDepositPeriod?: {
                seconds?: bigint;
                nanos?: number;
            } & {
                seconds?: bigint;
                nanos?: number;
            } & Record<Exclude<keyof I["depositParams"]["maxDepositPeriod"], keyof import("../../../google/protobuf/duration").Duration>, never>;
        } & Record<Exclude<keyof I["depositParams"], keyof DepositParams>, never>;
        tallyParams?: {
            quorum?: Uint8Array;
            threshold?: Uint8Array;
            vetoThreshold?: Uint8Array;
        } & {
            quorum?: Uint8Array;
            threshold?: Uint8Array;
            vetoThreshold?: Uint8Array;
        } & Record<Exclude<keyof I["tallyParams"], keyof TallyParams>, never>;
    } & Record<Exclude<keyof I, keyof QueryParamsResponse>, never>>(object: I): QueryParamsResponse;
};
export declare const QueryDepositRequest: {
    typeUrl: string;
    encode(message: QueryDepositRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositRequest;
    fromJSON(object: any): QueryDepositRequest;
    toJSON(message: QueryDepositRequest): unknown;
    fromPartial<I extends {
        proposalId?: bigint;
        depositor?: string;
    } & {
        proposalId?: bigint;
        depositor?: string;
    } & Record<Exclude<keyof I, keyof QueryDepositRequest>, never>>(object: I): QueryDepositRequest;
};
export declare const QueryDepositResponse: {
    typeUrl: string;
    encode(message: QueryDepositResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositResponse;
    fromJSON(object: any): QueryDepositResponse;
    toJSON(message: QueryDepositResponse): unknown;
    fromPartial<I extends {
        deposit?: {
            proposalId?: bigint;
            depositor?: string;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        };
    } & {
        deposit?: {
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
            } & Record<Exclude<keyof I["deposit"]["amount"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["deposit"]["amount"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["deposit"], keyof Deposit>, never>;
    } & Record<Exclude<keyof I, "deposit">, never>>(object: I): QueryDepositResponse;
};
export declare const QueryDepositsRequest: {
    typeUrl: string;
    encode(message: QueryDepositsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsRequest;
    fromJSON(object: any): QueryDepositsRequest;
    toJSON(message: QueryDepositsRequest): unknown;
    fromPartial<I extends {
        proposalId?: bigint;
        pagination?: {
            key?: Uint8Array;
            offset?: bigint;
            limit?: bigint;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        proposalId?: bigint;
        pagination?: {
            key?: Uint8Array;
            offset?: bigint;
            limit?: bigint;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: bigint;
            limit?: bigint;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryDepositsRequest>, never>>(object: I): QueryDepositsRequest;
};
export declare const QueryDepositsResponse: {
    typeUrl: string;
    encode(message: QueryDepositsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsResponse;
    fromJSON(object: any): QueryDepositsResponse;
    toJSON(message: QueryDepositsResponse): unknown;
    fromPartial<I extends {
        deposits?: {
            proposalId?: bigint;
            depositor?: string;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: bigint;
        };
    } & {
        deposits?: {
            proposalId?: bigint;
            depositor?: string;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
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
            } & Record<Exclude<keyof I["deposits"][number]["amount"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["deposits"][number]["amount"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["deposits"][number], keyof Deposit>, never>)[] & Record<Exclude<keyof I["deposits"], keyof {
            proposalId?: bigint;
            depositor?: string;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: bigint;
        } & {
            nextKey?: Uint8Array;
            total?: bigint;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryDepositsResponse>, never>>(object: I): QueryDepositsResponse;
};
export declare const QueryTallyResultRequest: {
    typeUrl: string;
    encode(message: QueryTallyResultRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultRequest;
    fromJSON(object: any): QueryTallyResultRequest;
    toJSON(message: QueryTallyResultRequest): unknown;
    fromPartial<I extends {
        proposalId?: bigint;
    } & {
        proposalId?: bigint;
    } & Record<Exclude<keyof I, "proposalId">, never>>(object: I): QueryTallyResultRequest;
};
export declare const QueryTallyResultResponse: {
    typeUrl: string;
    encode(message: QueryTallyResultResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultResponse;
    fromJSON(object: any): QueryTallyResultResponse;
    toJSON(message: QueryTallyResultResponse): unknown;
    fromPartial<I extends {
        tally?: {
            yes?: string;
            abstain?: string;
            no?: string;
            noWithVeto?: string;
        };
    } & {
        tally?: {
            yes?: string;
            abstain?: string;
            no?: string;
            noWithVeto?: string;
        } & {
            yes?: string;
            abstain?: string;
            no?: string;
            noWithVeto?: string;
        } & Record<Exclude<keyof I["tally"], keyof TallyResult>, never>;
    } & Record<Exclude<keyof I, "tally">, never>>(object: I): QueryTallyResultResponse;
};
/** Query defines the gRPC querier service for gov module */
export interface Query {
    /** Proposal queries proposal details based on ProposalID. */
    Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    /** Proposals queries all proposals based on given status. */
    Proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
    /** Vote queries voted information based on proposalID, voterAddr. */
    Vote(request: QueryVoteRequest): Promise<QueryVoteResponse>;
    /** Votes queries votes of a given proposal. */
    Votes(request: QueryVotesRequest): Promise<QueryVotesResponse>;
    /** Params queries all parameters of the gov module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Deposit queries single deposit information based proposalID, depositAddr. */
    Deposit(request: QueryDepositRequest): Promise<QueryDepositResponse>;
    /** Deposits queries all deposits of a single proposal. */
    Deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
    /** TallyResult queries the tally of a proposal vote. */
    TallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    Proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
    Vote(request: QueryVoteRequest): Promise<QueryVoteResponse>;
    Votes(request: QueryVotesRequest): Promise<QueryVotesResponse>;
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Deposit(request: QueryDepositRequest): Promise<QueryDepositResponse>;
    Deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
    TallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
}
