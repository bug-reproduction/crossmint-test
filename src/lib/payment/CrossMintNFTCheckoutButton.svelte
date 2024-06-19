<script lang="ts">
	import '@crossmint/client-sdk-vanilla-ui';
    import {randomSalt} from './utils';

	const collectionId = '4bc0fae8-1e17-42fe-94ac-1ba79c41d640';
	const projectId = '2531ad05-3963-4364-841f-4cd9013f09fa';
	const mintConfig = {
		totalPrice: '0.001',
		chain: '42',
		lock: '0x0000000000000000000000000000000000000001',
		salt: randomSalt(),
		data: '0x',
		quantity: '1'
	};
	const environment = 'staging';

	const checkoutProps = { paymentMethods: ['fiat'], experimental: true };
</script>

<crossmint-pay-button
	{collectionId}
	{projectId}
	{mintConfig}
	{environment}
	{checkoutProps}
	mintTo="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
/>
