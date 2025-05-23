-- CreateTable
CREATE TABLE "user" (
    "userid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "passwordhash" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "room" (
    "roomid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ownerid" TEXT NOT NULL,

    CONSTRAINT "room_pkey" PRIMARY KEY ("roomid")
);

-- CreateTable
CREATE TABLE "message" (
    "messageid" TEXT NOT NULL,
    "roomid" TEXT NOT NULL,
    "senderid" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "message_pkey" PRIMARY KEY ("messageid")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "room" ADD CONSTRAINT "room_ownerid_fkey" FOREIGN KEY ("ownerid") REFERENCES "user"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_roomid_fkey" FOREIGN KEY ("roomid") REFERENCES "room"("roomid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_senderid_fkey" FOREIGN KEY ("senderid") REFERENCES "user"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;
