export const API_URL = import.meta.env.VITE_API_URL

export class APIError<T> extends Error {
  err?: T

  constructor(message?: string, err?: T) {
    super(message)
    this.name = ''
    this.err = err
    Object.setPrototypeOf(this, APIError.prototype)
  }
}

export type CustomError = {
  detail: string
}

export async function fetchJSON<T, K>(
  input: string | URL | Request,
  init?: RequestInit & { defaultErrMsg?: string }
) {
  try {
    const response = await fetch(input, { ...init })

    if (!response.ok) {
      // Attempt to read error message
      const errMsg: K = await response.json().catch(() => {
        throw new APIError<K>(init?.defaultErrMsg)
      })

      throw new APIError<K>(init?.defaultErrMsg, errMsg)
    }

    return response.json() as Promise<T>
  } catch (e) {
    throw e as APIError<K>
  }
}
