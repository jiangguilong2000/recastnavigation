#pragma once
namespace  Util
{


    /**JByteaArray -> char* */
	 static char* ConvertJByteaArrayToChars(JNIEnv* env, jbyteArray bytearray)
	{
		char* chars = NULL;
		jbyte* bytes;
		bytes = env->GetByteArrayElements(bytearray, 0);
		size_t chars_len = env->GetArrayLength(bytearray);
		chars = new char[chars_len + 1];
		memset(chars, 0, chars_len + 1);
		memcpy(chars, bytes, chars_len);
		chars[chars_len] = 0;

		env->ReleaseByteArrayElements(bytearray, bytes, 0);

		return chars;
	}


    /** float* -> jfloatArray */
	 static  jfloatArray ConvertFloatStarToJfloatArray(JNIEnv* env, float* array, int length) {
		jfloatArray ret = env->NewFloatArray(length);
		env->SetFloatArrayRegion(ret, 0, length, array);
		return ret;
	}
};

