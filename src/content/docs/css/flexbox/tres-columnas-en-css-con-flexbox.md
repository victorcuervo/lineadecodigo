---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWGKFTW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxS9Rh2PxMw1YJIOFeIMsmRIo%2FAr9W0RCwE65VjsyGSQIhAPDJX2yCZfpwl83QrKqr5speoSdjSa3po6v6RUvFAz%2FaKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2dQiqnOnqpueHVpgq3AOmqVB3yDYsdw7zbh445UHd9EDsSxwIQbubcqOtjZWC1xxCqHRK3zKUklyT9KBMQmIyKnYPHmP%2FQlT6UR%2F5%2BPCL37lZe%2Bj1RI1xO%2BmNc4i6qVMZx5bsTRgKa4Av4O7hjcBldrnZdrn7%2FPkVny%2FG%2FdvIOG1mZi6Lf99%2Bgry6DWZaSV7eiNpy%2FJKBFS9jQ7RTg0Ie2fb1G5qkPgbpQWk%2Bz7Ese7%2FjuAF9BGO4qJ1V8qciT7afndP2Upi7AcgxWUBqw8LH4DacacstVy3VmGmkuWUc4xbf8Q6YzirzIR1B8KmyLz%2FiQEPYvOoKunRKqcxESlBLOSbttfSGR5fEHXPDC8UcWAo0F1%2BFb7jsRfdBYwaPPSg0j2ycdMJFBAerB4Ov7Azm%2FF%2FxBGkx2M2C%2B8Y99PUUT06%2B84%2BAxapakBSLRWEOmxVTHUbrK8SJPsaKBpKQt2g6Od3SCJzi%2FnqnnLhW%2BNmQVRPJznDAulbMz77DjvY8WASfUIOlTE64HeGklV3fmTbvK2%2FR2%2BJ964sFfZ1JV2MB%2FgkRzU%2FqYJdQoZ05m7%2B8k%2FWulbBqXlC5PvxHXxS5X4nNBiDmqINfovHY%2BPDauyMAJtpoQLllqif4mlWXFVHHeJUDsu8Q2%2BgobAEmzjDW5NvJBjqkAQHyZYm%2BZEHmm2%2BKhTKuPrc1Kj9DxtH3nHMpvrnavLSk3iChm25tCqM56pCleULYKzbODTdeV1ExuEUznN1Ak0USSOVfadRbsX3dcqjb3m2vyt%2B2UTjILJ6ruGxgjEXZS1FaJKvLzHj%2FprsA478eOEIHS7L%2B32MzH9wd9Fkc1uBAXWnQ3o3r0axqLq2RKPAWSMgZ1aV01oVKq9f4PoP%2FYuWJsmuV&X-Amz-Signature=4692487823cc716daad327910dc586c8d5ea196d7d77a1ffca00f1d3b882c9c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWGKFTW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxS9Rh2PxMw1YJIOFeIMsmRIo%2FAr9W0RCwE65VjsyGSQIhAPDJX2yCZfpwl83QrKqr5speoSdjSa3po6v6RUvFAz%2FaKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2dQiqnOnqpueHVpgq3AOmqVB3yDYsdw7zbh445UHd9EDsSxwIQbubcqOtjZWC1xxCqHRK3zKUklyT9KBMQmIyKnYPHmP%2FQlT6UR%2F5%2BPCL37lZe%2Bj1RI1xO%2BmNc4i6qVMZx5bsTRgKa4Av4O7hjcBldrnZdrn7%2FPkVny%2FG%2FdvIOG1mZi6Lf99%2Bgry6DWZaSV7eiNpy%2FJKBFS9jQ7RTg0Ie2fb1G5qkPgbpQWk%2Bz7Ese7%2FjuAF9BGO4qJ1V8qciT7afndP2Upi7AcgxWUBqw8LH4DacacstVy3VmGmkuWUc4xbf8Q6YzirzIR1B8KmyLz%2FiQEPYvOoKunRKqcxESlBLOSbttfSGR5fEHXPDC8UcWAo0F1%2BFb7jsRfdBYwaPPSg0j2ycdMJFBAerB4Ov7Azm%2FF%2FxBGkx2M2C%2B8Y99PUUT06%2B84%2BAxapakBSLRWEOmxVTHUbrK8SJPsaKBpKQt2g6Od3SCJzi%2FnqnnLhW%2BNmQVRPJznDAulbMz77DjvY8WASfUIOlTE64HeGklV3fmTbvK2%2FR2%2BJ964sFfZ1JV2MB%2FgkRzU%2FqYJdQoZ05m7%2B8k%2FWulbBqXlC5PvxHXxS5X4nNBiDmqINfovHY%2BPDauyMAJtpoQLllqif4mlWXFVHHeJUDsu8Q2%2BgobAEmzjDW5NvJBjqkAQHyZYm%2BZEHmm2%2BKhTKuPrc1Kj9DxtH3nHMpvrnavLSk3iChm25tCqM56pCleULYKzbODTdeV1ExuEUznN1Ak0USSOVfadRbsX3dcqjb3m2vyt%2B2UTjILJ6ruGxgjEXZS1FaJKvLzHj%2FprsA478eOEIHS7L%2B32MzH9wd9Fkc1uBAXWnQ3o3r0axqLq2RKPAWSMgZ1aV01oVKq9f4PoP%2FYuWJsmuV&X-Amz-Signature=b586644af1b3ecddcadba6f827eaf7eefcad142cb4dbdbd225fe97d5bd480bab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

