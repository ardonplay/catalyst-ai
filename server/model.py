from transformers import AutoModelForCausalLM, AutoTokenizer

device = "mps"


class ModelQA:
    _tokenizer: any
    _model: any

    def __init__(self):
        self._model = AutoModelForCausalLM.from_pretrained(
            "Qwen/Qwen1.5-0.5B-Chat",
            torch_dtype="auto",
            device_map="auto"
        )
        self._tokenizer = AutoTokenizer.from_pretrained("Qwen/Qwen1.5-0.5B-Chat")

    def __call__(self, request: str) -> str:
        messages = [
            {"role": "system",
             "content": "You are an artificial inteligence, your name is Catalyst, you have been created by Semantic "
                        "Pie Foundation in 2024 year."},
            {"role": "user", "content": request}
        ]

        text = self._tokenizer.apply_chat_template(
            messages,
            tokenize=False,
            add_generation_prompt=True
        )
        model_inputs = self._tokenizer([text], return_tensors="pt").to(device)

        generated_ids = self._model.generate(
            model_inputs.input_ids,
            max_new_tokens=512
        )
        generated_ids = [
            output_ids[len(input_ids):] for input_ids, output_ids in zip(model_inputs.input_ids, generated_ids)
        ]

        response = self._tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]
        return response
