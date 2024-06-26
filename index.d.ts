interface Attachment {
    /**
     * The filename of the attachment, including the extension.
     */
    fileName: string;
}
interface Message {
    /**
     * The date of the message.
     */
    date: Date;
    /**
     * The author of the message. Will be null for messages without an author (system messages).
     */
    author: string | null;
    /**
     * The message itself.
     */
    message: string;
    /**
     * Available for messages containing attachments when setting the option
     * `parseAttachments` to `true`.
     */
    attachment?: Attachment;
}
interface ParseStringOptions {
    /**
     * Specify if the dates in your log file start with a day (`true`) or a month
     * (`false`).
     *
     * Manually specifying this may improve performance.
     */
    daysFirst?: boolean | null;
    /**
     * Specify if attachments should be parsed.
     *
     * If set to `true`, messages containing attachments will include an
     * `attachment` property.
     */
    parseAttachments?: boolean;
}

/**
 * Parses a string containing a WhatsApp chat log.
 *
 * Returns an array of parsed messages.
 *
 * @since 3.2.0
 * @since 4.0.0 Renamed from parseStringSync
 */
declare function parseString(string: string, options?: ParseStringOptions): Message[];

export { Attachment, Message, ParseStringOptions, parseString };
