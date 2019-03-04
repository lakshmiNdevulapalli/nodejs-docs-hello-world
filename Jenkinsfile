job('Migration-develop'){
    scm{
        git(){
            branch("origin/**")
        }
    }
	logRotator{
	    daysToKeep(40)
	    numToKeep(100)
	}

    wrappers{
        nodejs('nodejs')
    }
    steps{
        shell("npm install")
        shell("npm install -g --save-dev @babel/cli")
        shell("npm start")
        environmentalVariables{
        	env()
    	}
        nodejsCommand()
    }
}
job('Migration-stage'){
    scm{
        git(){
            branch("origin/release/*")
        }

    }
    logRotator{
	    daysToKeep(40)
	    numToKeep(100)
	}

    wrappers{
        nodejs('nodejs')
    }
    steps{
        shell("npm install")
        shell("npm install -g --save-dev @babel/cli")
        shell("npm start")
        environmentalVariables{
        	env("sample.env")
    	}
        nodejsCommand()
    }

}
job('Migration-prod'){
    scm{
        git(){
            branch("origin/master")
        }

    }
    logRotator{
	    daysToKeep(40)
	    numToKeep(100)
	}

    wrappers{
        nodejs('nodejs')
    }
    steps{
        shell("npm install")
        shell("npm install -g --save-dev @babel/cli")
        shell("npm start")
        environmentalVariables{
        	env("sample.env")
    	}
        nodejsCommand()
    }
}