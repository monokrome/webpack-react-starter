all: production


production:
	webpack -p


clean:
	rm -rf lib


.PHONY: all clean
