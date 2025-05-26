class Calculator {
 
	constructor(value) {
        this.value = value;
        this.error;
	}

	add(value){
		this.value += value;
        return this;
	}

    /** 
     * @param {number} value
     * @return {Calculator}
     */
	subtract(value){
		this.value -= value;
        return this;
	}

	multiply(value) {
		this.value *= value;
        return this;
	}

	divide(value) {
        if (value === 0) this.error = "Division by zero is not allowed"
		this.value /= value;
        return this;
	}
  
	power(value) {
		this.value = this.value ** value;
        return this;
	}
    
	getResult() {
        if (!this.error) return this.value
        else return this.error
	}
}