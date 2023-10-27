"use server";

import { executeGraphql } from "@/api/graphqlApi";
import { CartSetItemQuantityDocument } from "@/gql/graphql";

export const changeItemQuantity = (itemId: string, quantity: number) => {
	return executeGraphql({
		query: CartSetItemQuantityDocument,
		variables: {
			updateOrderItemId: itemId,
			quantity: quantity,
		},
	});
};
