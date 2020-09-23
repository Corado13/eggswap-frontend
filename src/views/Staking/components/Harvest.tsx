import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {
  Button
} from 'antd';

import { Contract } from 'web3-eth-contract'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Label from '../../../components/Label'
import Value from '../../../components/Value'

import {
  getBalanceNumber,
} from '../../../utils/formatBalance'
import {LogoImg} from "../../../components/Logo/Logo";
import WithdrawModal from './WithdrawModal'
import useModal from "../../../hooks/useModal";
import {useWallet} from "use-wallet";
import useTokenBalance from "../../../hooks/useTokenBalance";
import useLeave from "../../../hooks/sashimiBar/useLeave";

interface HarvestProps {
  sashimiBarContract: Contract
  walletLocked: React.ReactElement
}

const Harvest: React.FC<HarvestProps> = ({sashimiBarContract, walletLocked}) => {

  const { account } = useWallet();
  const { onLeave } = useLeave(sashimiBarContract);
  const tokenBalance = useTokenBalance(sashimiBarContract ? sashimiBarContract.options.address : null);

  const [onPresentWithdraw] = useModal(
    <WithdrawModal
      max={tokenBalance}
      onConfirm={async (amount) => {
        if (!amount || parseFloat(amount) <= 0) {
          return;
        }
        await onLeave(amount, 18);
      }}
      tokenName={'SASHIMI'}
    />,
  )

  const covertButton = <Button
    disabled={!tokenBalance.toNumber() || tokenBalance.isEqualTo(0)}
    type="primary"
    size="large"
    block
    onClick={onPresentWithdraw}
  >
    {'Convert to SASHIMI'}
  </Button>;

  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            <CardIcon>
              <LogoImg />
            </CardIcon>
            <Value value={getBalanceNumber(tokenBalance)} />
            <Label text="xSASHIMI(Sashimi Bar) Available" />
          </StyledCardHeader>
          <StyledCardActions>
            { account ? covertButton : walletLocked}
          </StyledCardActions>
        </StyledCardContentInner>
      </CardContent>
    </Card>
  )
}

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[6]}px;
  width: 100%;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export default Harvest