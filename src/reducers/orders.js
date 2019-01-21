import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

export default (state = [], action) => {
	switch (action.type) {
		case CREATE_NEW_ORDER:
			return [...state, {
				id: action.payload.id,
				recipe : action.payload.recipe,
				ingredients : [],
				position : "clients"
			}];

		case MOVE_ORDER_NEXT:
			if (state.length > 0) {
				const newArr = [...state];
				newArr.map(order => {
					if (order.id === action.payload) {
						switch (order.position) {
							case "clients":
								order.position = "conveyor_1";
								break;
							case "conveyor_1":
								order.position = "conveyor_2";
								break;
							case "conveyor_2":
								order.position = "conveyor_3";
								break;
							case "conveyor_3":
								order.position = "conveyor_4";
								break;
							case "conveyor_4":
								let count = -1;
								for (let i = 0; i <= order.ingredients.length; i++) {
									for (let k = 0; k <= order.recipe.length; k++) {
										if (order.ingredients[i] === order.recipe[k]) {
											count++;
										}
									}
								}
								if (order.recipe.length === count) {
									order.position = "finish";
								}
								break;
						}
						return order;
					} else {
						return order;
					}
				});
				state = [...newArr];
				return state;
			} else {
				return state;
			}

		case MOVE_ORDER_BACK:
			if (state.length > 0) {
				const newArr = [...state];
				newArr.map(order => {
					if (order.id === action.payload) {
						switch (order.position) {
							case "conveyor_1":
								break;
							case "conveyor_2":
								order.position = "conveyor_1";
								break;
							case "conveyor_3":
								order.position = "conveyor_2";
								break;
							case "conveyor_4":
								order.position = "conveyor_3";
								break;
						}
						return order;
					} else {
						return order;
					}
				});
				state = [...newArr];
				return state;
			} else {
				return state;
			}

		case ADD_INGREDIENT:
			if (state.length > 0) {
				const newArr = [...state];
				for (let i = 0; i <= newArr.length; i++) {
					let order = newArr[i];
					if (order.position === action.payload.from) {
						order.ingredients = [...order.ingredients, action.payload.ingredient];
						newArr[i] = order;
						break;
					}
				}
				state = [...newArr];
				return state;
			} else {
				return state;
			}

		default:
			return state;
	}
};

export const getOrdersFor = (state, position) =>
	state.orders.filter(order => order.position === position);
