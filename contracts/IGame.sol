//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface IGame {
    event Winner(address);

    function win(address erc20Token) external;
}
