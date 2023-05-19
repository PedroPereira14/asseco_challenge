import React from "react";
import { Document, Page, Text, View, PDFViewer } from "@react-pdf/renderer";

const TransferDoc = ({ originAcc, IBAN, transferDesc, amounts }) => (
  <Document>
    <Page size="A4">
      <View>
        <Text>Transfer Invoice</Text>
        <View>
          <Text>Origin Account</Text>
          <Text>{originAcc}</Text>
        </View>
        <Text>Destination IBAN</Text>
        <Text>{IBAN}</Text>
        <Text>Transfer description</Text>
        <Text>{transferDesc}</Text>
        <Text>Amount</Text>
        <Text>{amounts}</Text>
      </View>
    </Page>
  </Document>
);

const PdfView = ({ data }) => {
  const { originAccount, destinationIBAN, transferDescription, amount } = data;

  return (
    <div style={{ height: "96vh" }}>
      <PDFViewer style={{ width: "100%", height: "100%" }}>
      <TransferDoc
        originAcc={originAccount}
        IBAN={destinationIBAN}
        transferDesc={transferDescription}
        amounts={amount}
      />
    </PDFViewer>
    </div>
  );
};

export default PdfView;
