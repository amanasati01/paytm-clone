'use client'
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import { Button } from "@repo/ui/button";
import { toast } from "react-toastify";

interface SendCardProps {
  // Add any props if needed
}

export function SendCard({}: SendCardProps) {
  const [number, setNumber] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSend = async () => {
    setLoading(true);
    setError(null);
    try {
    const response =   await p2pTransfer(number, Number(amount));
     if(response.message === "Transfer successful"){
        toast.success(response.message)
     }
      toast.dark(response.message)
    } catch (error) {
        toast.dismiss("payment failed")
     return setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Card title="Send">
        <div>
          <TextInput
            placeholder={"Number"}
            label="Number"
            value={number}
            onChange={(value) => {
              setNumber(value);
            }}
          />
          <TextInput
            placeholder={"Amount"}
            label="Amount"
            value={amount}
            onChange={(value) => {
              setAmount(value);
            }}
          />
          <div className="pt-4 flex justify-center">
            <Button onClick={handleSend} disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </Button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </Card>
    </div>
  );
}
