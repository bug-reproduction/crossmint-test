<script lang="ts">
	import '@crossmint/client-sdk-vanilla-ui';
    import type {CrossmintEvent} from '@crossmint/client-sdk-base';

	const collectionId = '4bc0fae8-1e17-42fe-94ac-1ba79c41d640';
	const projectId = '2531ad05-3963-4364-841f-4cd9013f09fa';
	const mintConfig = {
		totalPrice: '0.001',
		chain: '42',
		lock: '0x0000000000000000000000000000000000000001',
		salt: '4',
		data: '0x',
		quantity: '1'
	};
	const environment = 'staging';

	const checkoutProps = { paymentMethods: ['fiat'] };

	function onEvent(event: CrossmintEvent) {
		console.log('default', event);
	}

	const email = 'ronansandford@yahoo.fr';
	const wallet = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';

	const whPassThroughArgs = {
		customId: 'abc123',
		orderNumber: '789def'
	};

	const paymentMethod = checkoutProps.paymentMethods;

	const cardWalletPaymentMethods = 'none';

	const emailInputOptions = { show: true };

	const uiConfig = {
		borderRadius: '4px',
		colors: {
			background: '#F0F4F8',
			backgroundSecondary: '#FFFFFF'
		}
	};
</script>

<div class="payment-wrapper">
	<div>
		<crossmint-payment-element
			{environment}
			{projectId}
			{collectionId}
			{wallet}
			{mintConfig}
			{cardWalletPaymentMethods}
			{paymentMethod}
			{emailInputOptions}
			{uiConfig}
			{onEvent}
		/>
	</div>
</div>

<style>
	.payment-wrapper {
		padding: 1rem;
        background-color: #F0F4F8;
	}
</style>
