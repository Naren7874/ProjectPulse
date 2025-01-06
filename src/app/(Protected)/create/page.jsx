"use client";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const CreatePage = () => {
    // Correctly destructuring useForm hooks
    const { handleSubmit, register, reset } = useForm();

    const onSubmit = (data) => {
        // Handle form submission
        window.alert(JSON.stringify(data));
        console.log(data);
        reset(); // Reset the form after submission
        return true;
    };

    return (
        <div className="flex items-center justify-center h-full gap-12">
            <img src="#" alt="GitHub Logo" className="h-56 w-auto" />
            <div>
                <div>
                    <h1 className="font-semibold text-2xl">Link Your GitHub Repository</h1>
                    <p className="text-sm text-muted-foreground">
                        Enter the URL of your repository to link it to ProjectPulse.
                    </p>
                </div>
                <div className="h-4"></div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <Input
                            {...register("repoUrl", { required: true })}
                            placeholder="Repository URL"
                            required
                        />
                        <Input
                            {...register("projectName", { required: true })}
                            placeholder="Project Name"
                            required
                        />
                        <Input
                            {...register("gitHubToken", { required: true })}
                            placeholder="GitHub Token"
                            required
                            type="password" 
                        />
                        <button
                            type="submit"
                            className="mt-4 px-4 py-2 bg-primary text-white dark:text-black rounded-md hover:bg-primary-dark"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePage;
