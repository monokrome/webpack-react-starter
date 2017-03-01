all: production


production:
	babel src -d lib


static:
	webpack -p


clean:
	rm -rf lib


.PHONY: all clean
