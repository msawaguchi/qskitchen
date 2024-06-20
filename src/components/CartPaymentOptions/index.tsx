import { useState } from 'react'
import { TbCashBanknote, TbCreditCard, TbQrcode } from 'react-icons/tb'
import { PaymentMethods } from '@/lib/definitions'

import { PaymentOptionsContainer, PaymentOption } from './styles'

export function CartPaymentOptions() {
  const handleSelect = (method: 'cash' | 'card' | 'qrcode') => {
    setSelectedPaymentMethod({ method })
  }

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethods>({ method: 'cash' })

  return (
    <PaymentOptionsContainer>
      <PaymentOption
        selected={selectedPaymentMethod.method === 'cash'}
        onClick={() => handleSelect('cash')}
      >
        <div>
          <TbCashBanknote />
        </div>
        Cash
      </PaymentOption>
      <PaymentOption
        selected={selectedPaymentMethod.method === 'card'}
        onClick={() => handleSelect('card')}
      >
        <div>
          <TbCreditCard />
        </div>
        Credit/Debit Card
      </PaymentOption>
      <PaymentOption
        selected={selectedPaymentMethod.method === 'qrcode'}
        onClick={() => handleSelect('qrcode')}
      >
        <div>
          <TbQrcode />
        </div>
        QR Code
      </PaymentOption>
    </PaymentOptionsContainer>
  )
}
