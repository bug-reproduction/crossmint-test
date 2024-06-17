<script lang="ts">
	import CrossMintNFTCheckoutButton from '$lib/payment/CrossMintNFTCheckoutButton.svelte';
	import CrossMintNftCheckoutElement from '$lib/payment/CrossMintNFTCheckoutElement.svelte';
	import UsingIframe from '$lib/payment/UsingIframe.svelte';
</script>


<p>
	<CrossMintNFTCheckoutButton>Crossmint NFT Checkout</CrossMintNFTCheckoutButton>
</p>


<CrossMintNftCheckoutElement/>

<div class="payment-wrapper">
    <UsingIframe />
</div>

<style>
    .payment-wrapper {
        width: 600px;
        height: 500px;
    }
</style>