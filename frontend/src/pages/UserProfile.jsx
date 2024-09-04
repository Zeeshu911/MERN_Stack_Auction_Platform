import Spinner from "@/custom-components/Spinner";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);
  const navigateTo = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/");
    }
  }, [isAuthenticated]);
  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-start">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="bg-white mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md">
              <img
                src={user.profileImage?.url}
                alt="/imageHolder.jpg"
                className="w-36 h-36 rounded-full"
              />

              <div className="mb-6 w-full">
                <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Username
                    </label>
                    <input
                      type="text"
                      defaultValue={user.userName}
                      className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="text"
                      defaultValue={user.email}
                      className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="number"
                      defaultValue={user.phone}
                      className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      defaultValue={user.address}
                      className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Role
                    </label>
                    <input
                      type="text"
                      defaultValue={user.role}
                      className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Joined On
                    </label>
                    <input
                      type="text"
                      defaultValue={user.createdAt?.substring(0, 10)}
                      className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                      disabled
                    />
                  </div>
                </div>
              </div>

              {user.role === "Auctioneer" && (
                <div className="mb-6 w-full">
                  <h3 className="text-xl font-semibold mb-4">
                    Payment Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Bank Name
                      </label>
                      <input
                        type="text"
                        defaultValue={user.paymentMethods.bankTransfer.bankName}
                        className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Bank Account (IBAN)
                      </label>
                      <input
                        type="text"
                        defaultValue={
                          user.paymentMethods.bankTransfer.bankAccountNumber
                        }
                        className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        User Name On Bank Account
                      </label>
                      <input
                        type="text"
                        defaultValue={
                          user.paymentMethods.bankTransfer.bankAccountName
                        }
                        className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Easypaisa Account Number
                      </label>
                      <input
                        type="text"
                        defaultValue={
                          user.paymentMethods.easypaisa.easypaisaAccountNumber
                        }
                        className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Paypal Email
                      </label>
                      <input
                        type="text"
                        defaultValue={user.paymentMethods.paypal.paypalEmail}
                        className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-6 w-full">
                <h3 className="text-xl font-semibold mb-4">
                  Other User Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {user.role === "Auctioneer" && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Unpaid Commissions
                        </label>
                        <input
                          type="text"
                          defaultValue={user.unpaidCommission}
                          className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                          disabled
                        />
                      </div>
                    </>
                  )}
                  {user.role === "Bidder" && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Auctions Won
                        </label>
                        <input
                          type="text"
                          defaultValue={user.auctionsWon}
                          className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                          disabled
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Money Spent
                        </label>
                        <input
                          type="text"
                          defaultValue={user.moneySpent}
                          className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                          disabled
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default UserProfile;
