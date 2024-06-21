// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title Proof of Machinehood
 * @dev Smart contract to record and verify machine attestations on-chain.
 */
contract ProofOfMachinehood {
    struct Machine {
        uint256 id;
        address owner;
        string manufacturer;
        string model;
        string attestationToken;
        uint256 timestamp;
        bool verified;
    }

    mapping(uint256 => Machine) public machines;
    mapping(address => uint256[]) private ownerMachines;

    event MachineRegistered(uint256 indexed id, address indexed owner);
    event MachineVerified(uint256 indexed id);

    uint256 public machineIdCounter;

    /**
     * @dev Register a new machine attestation.
     * @param _manufacturer Manufacturer of the machine.
     * @param _model Model of the machine.
     * @param _attestationToken Attestation token or proof.
     */
    function registerMachine(
        string memory _manufacturer,
        string memory _model,
        string memory _attestationToken
    ) external {
        machineIdCounter++;
        machines[machineIdCounter] = Machine({
            id: machineIdCounter,
            owner: msg.sender,
            manufacturer: _manufacturer,
            model: _model,
            attestationToken: _attestationToken,
            timestamp: block.timestamp,
            verified: false
        });

        ownerMachines[msg.sender].push(machineIdCounter);

        emit MachineRegistered(machineIdCounter, msg.sender);
    }

    /**
     * @dev Verify a machine attestation.
     * @param _machineId ID of the machine.
     */
    function verifyMachine(uint256 _machineId) external {
        require(machines[_machineId].owner == msg.sender, "Not machine owner");
        require(!machines[_machineId].verified, "Machine already verified");

        machines[_machineId].verified = true;

        emit MachineVerified(_machineId);
    }

    /**
     * @dev Get the total number of machines registered.
     */
    function totalMachines() external view returns (uint256) {
        return machineIdCounter;
    }

    /**
     * @dev Get all machines owned by an address.
     * @param _owner Address of the owner.
     */
    function getOwnerMachines(address _owner) external view returns (uint256[] memory) {
        return ownerMachines[_owner];
    }
}
