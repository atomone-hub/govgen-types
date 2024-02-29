import { Deposit, Vote, Proposal, DepositParams, VotingParams, TallyParams } from "./gov";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "govgen.gov.v1beta1";
/** GenesisState defines the gov module's genesis state. */
export interface GenesisState {
    /** starting_proposal_id is the ID of the starting proposal. */
    startingProposalId: bigint;
    /** deposits defines all the deposits present at genesis. */
    deposits: Deposit[];
    /** votes defines all the votes present at genesis. */
    votes: Vote[];
    /** proposals defines all the proposals present at genesis. */
    proposals: Proposal[];
    /** params defines all the paramaters of related to deposit. */
    depositParams: DepositParams | undefined;
    /** params defines all the paramaters of related to voting. */
    votingParams: VotingParams | undefined;
    /** params defines all the paramaters of related to tally. */
    tallyParams: TallyParams | undefined;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        startingProposalId?: bigint;
        deposits?: {
            proposalId?: bigint;
            depositor?: string;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
        votes?: {
            proposalId?: bigint;
            voter?: string;
            option?: import("./gov").VoteOption;
            options?: {
                option?: import("./gov").VoteOption;
                weight?: string;
            }[];
        }[];
        proposals?: {
            proposalId?: bigint;
            content?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            status?: import("./gov").ProposalStatus;
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
        tallyParams?: {
            quorum?: Uint8Array;
            threshold?: Uint8Array;
            vetoThreshold?: Uint8Array;
        };
    } & {
        startingProposalId?: bigint;
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
        proposals?: {
            proposalId?: bigint;
            content?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            status?: import("./gov").ProposalStatus;
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
            status?: import("./gov").ProposalStatus;
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
            status?: import("./gov").ProposalStatus;
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
            } & Record<Exclude<keyof I["proposals"][number]["finalTallyResult"], keyof import("./gov").TallyResult>, never>;
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
            status?: import("./gov").ProposalStatus;
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
        tallyParams?: {
            quorum?: Uint8Array;
            threshold?: Uint8Array;
            vetoThreshold?: Uint8Array;
        } & {
            quorum?: Uint8Array;
            threshold?: Uint8Array;
            vetoThreshold?: Uint8Array;
        } & Record<Exclude<keyof I["tallyParams"], keyof TallyParams>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
