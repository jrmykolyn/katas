#! /bin/bash

# Access the name of the script via basename $0
echo "The name of the script is $(basename "${0}")"

# Alternative means of accessing the name of the script
# NOTE: Since $0 is contextual (and can be overridden), $BASH_SOURCE is the preferred means of accessing the script name and path.
echo "The name of the script can also be accessed via ${BASH_SOURCE}"

# Access the location of the script via $0
echo "The location of the script is ${0}"

# Access the argument at position n via $n
echo "The value of the argument at position 1 is $( if [[ -z "${1}" ]]; then echo "undefined"; else echo "${1}"; fi )"

# Access the total number of arguments via $#
echo "The total number of arguments is ${#}"

# Access all of the arguments via $*
echo "All of the arguments are as follows: ${*}"
