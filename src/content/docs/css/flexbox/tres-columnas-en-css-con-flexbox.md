---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CXFGNNV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6Rm0r%2F8i78LCcIISCg0bl5YPm4p4emMKRgXg5dQkwLQIhAIhV%2FCDG6n20g0ekvbRWETpYsLs14unhfF0dUPtEuZS0Kv8DCE8QABoMNjM3NDIzMTgzODA1Igz3Uz2i3XOg1Vqt1ckq3ANEXklC73qNPFw6yFAYxZZjPJukDhEiEP1AH9LX%2BgaDybNdPknO8VLgI4iEkdpfu5rGtSJUFy3hNqpr7bM19NbfmOLFNhF4k%2Fs%2BGgKV7%2FNZo4jRNWwjHWP1Sx7Iy9oJIrYh3mKawQyf%2F5OnIuJ7yDgJ%2FLioYTs6YPfsJa5ZioN%2BQGGaFte5Ycm%2FW7AYFKKRW8m6XngYEmymvMBe8m6hm9XqQN0iiutL6GTeJOx75f0dbHoo981eabRtfKGRpUZ9D36HQigb2DgAMkB8DRTxiOfiVBeQEpLfxd%2B5WmivjDuaHmi2ED3HLOJQjC75PfPeGIKq13dCC00VgNJ1DZXFMma9PH9w3EcSkrZXAfzW15JyELfJjWFN86OKOwDM8WJ2XJ90hVK2uFyivHJ%2FCdAZs7XUFP1wacXf0RFMrVaQ9w46XiR3IuqrPwkymxC077gf9%2BAOEWwD2GGE99Mki1Ctc40SEIblyb1ZdHYNW4eQVCUG2ux2B6JdpfssMRqxPVPCW3xyLdvmEf9gj%2BNTvXjR6kuMW6x4yHmt2HBNj4IgDcZLL1N1GWvNt9NslXrjRlg5mbrvHC97B%2BaivZW51vI%2BjTBK8y6hxshNVIhCryKNOcRuYaCyosSund0c2KmxQzDVjMjJBjqkAS9uZeW9ryF0jBGSR2LPCRy813wxMq02rau0ZCvc7mGi7nGkGBNi5k%2F1oWH%2BYBbJaB8Jl2kF7%2BXBlh8wGi6Dd5ArPgeK16vJTyNlYdeKCw0%2BSX0WNXXlBubG8szDubESJz3gQX1BfCCIsCWKviu4ukTddTo638xA%2By1oD8IORxA99wmdXAiaILijstFctOqY6F8%2BZUuc%2BWUjXSbAqAqhySdVcMJO&X-Amz-Signature=059c48b0bf551529f129a1db10cae1da9d541c7fef18d020b789cd64622b188c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CXFGNNV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6Rm0r%2F8i78LCcIISCg0bl5YPm4p4emMKRgXg5dQkwLQIhAIhV%2FCDG6n20g0ekvbRWETpYsLs14unhfF0dUPtEuZS0Kv8DCE8QABoMNjM3NDIzMTgzODA1Igz3Uz2i3XOg1Vqt1ckq3ANEXklC73qNPFw6yFAYxZZjPJukDhEiEP1AH9LX%2BgaDybNdPknO8VLgI4iEkdpfu5rGtSJUFy3hNqpr7bM19NbfmOLFNhF4k%2Fs%2BGgKV7%2FNZo4jRNWwjHWP1Sx7Iy9oJIrYh3mKawQyf%2F5OnIuJ7yDgJ%2FLioYTs6YPfsJa5ZioN%2BQGGaFte5Ycm%2FW7AYFKKRW8m6XngYEmymvMBe8m6hm9XqQN0iiutL6GTeJOx75f0dbHoo981eabRtfKGRpUZ9D36HQigb2DgAMkB8DRTxiOfiVBeQEpLfxd%2B5WmivjDuaHmi2ED3HLOJQjC75PfPeGIKq13dCC00VgNJ1DZXFMma9PH9w3EcSkrZXAfzW15JyELfJjWFN86OKOwDM8WJ2XJ90hVK2uFyivHJ%2FCdAZs7XUFP1wacXf0RFMrVaQ9w46XiR3IuqrPwkymxC077gf9%2BAOEWwD2GGE99Mki1Ctc40SEIblyb1ZdHYNW4eQVCUG2ux2B6JdpfssMRqxPVPCW3xyLdvmEf9gj%2BNTvXjR6kuMW6x4yHmt2HBNj4IgDcZLL1N1GWvNt9NslXrjRlg5mbrvHC97B%2BaivZW51vI%2BjTBK8y6hxshNVIhCryKNOcRuYaCyosSund0c2KmxQzDVjMjJBjqkAS9uZeW9ryF0jBGSR2LPCRy813wxMq02rau0ZCvc7mGi7nGkGBNi5k%2F1oWH%2BYBbJaB8Jl2kF7%2BXBlh8wGi6Dd5ArPgeK16vJTyNlYdeKCw0%2BSX0WNXXlBubG8szDubESJz3gQX1BfCCIsCWKviu4ukTddTo638xA%2By1oD8IORxA99wmdXAiaILijstFctOqY6F8%2BZUuc%2BWUjXSbAqAqhySdVcMJO&X-Amz-Signature=b1e376e841f6f77165e9dd0565c77f1e3dd7c5c014479adffe28767eaf67b804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

