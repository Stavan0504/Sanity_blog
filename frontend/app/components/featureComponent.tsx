
import { PortableText } from "@portabletext/react";
import { customComponents } from "./SerializerComponent";
import featuringTypes from '../types/featuresTypes'
export default function Features({ sections }: featuringTypes) {
    return (
        <section className="py-16 px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {sections.map((item, index) => (
                    <div key={index} className="bg-gray-900 p-6 rounded-lg transition-all hover:scale-105 hover:shadow-2xl duration-500 shadow-lg">
                        <PortableText key={index} value={item.text} components={customComponents} />
                    </div>
                ))}
            </div>

        </section>


    )
}