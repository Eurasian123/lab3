<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title><?= lang('Errors.pageNotFound') ?></title>
<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <?php
	$link = [
	'rel' => 'stylesheet',
	'href' => 'styles.css'
	];
	echo link_tag($link);
	$link2 = [ 
	'rel' => 'icon',
	'href' => 'images/icon.ico',
	'type' => 'image/x-icon'
	];
	echo link_tag($link2);
	?>
</head>

<body class="four_error">
<div class="topnav">
	<p id="date"></p>
	<nav class="navcont">
		<a href="home">Home</a>
		<a href="about">About</a>
		<div class="drop">
		<a href="javascript:void(0)" class="quicknav">Quick Navigation</a>
		<div class="dropcont">
			<a href="limbo">Limbo</a>
			<a href="lust">Lust</a>
			<a href="gluttony">Gluttony</a>
			<a href="greed">Greed</a>
			<a href="wrath">Wrath</a>
			<a href="heresy">Heresy</a>
			<a href="violence">Violence</a>
		</div>
		</div>
		<a href="contact">Contact</a>
	</nav>
</div>
<div class="fourofour">
    <h1>...Oh no!</h1>
	<h2>You went too deep!</h2>
	<h3>You were trying to access:</h3>
        <p>
		<?php if (nl2br(esc($message)) == 'fraud') : ?>
			<?= 'LAYER 8 :: FRAUD' ?>
		<?php elseif (nl2br(esc($message)) == 'treachery') : ?>
			<?= 'LAYER 9 :: TREACHERY' ?>
		<?php else : ?>
			<?php if (ENVIRONMENT !== 'production') : ?>
				<?= nl2br(esc($message)) ?>
			<?php else : ?>
				<?= lang('Errors.sorryCannotFind') ?>
			<?php endif; ?>
		<?php endif; ?>
        </p>
</div>
</body>
</html>
