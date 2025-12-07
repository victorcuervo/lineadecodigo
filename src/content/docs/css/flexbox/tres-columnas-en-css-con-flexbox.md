---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PW63HEC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuoEBakltqi76JijdIDl8t%2B2MlzV5PpOOEsa8qvhFBiAiAZt1MpZ5Pv0kRKDeUgf13fC6eXAst%2Fed75meZbDpuf7iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP0d5T3vdFoKiMfi5KtwDfXyjR3yHh7b8EcJSk831gwQJUSrWChiRjXncQNSZEOTLtZzbH1N8KKGV71MG9DCcgOCL0Tfnl9wnJeldQX30hbscwRqG2y4GnuwogY7RatJxrYN45REeWYi6NAOVS5CaiVWy4HCz5lEoiTzRXXx6z5LcqVNuUT6NTgL3RLd7GKSkutHxQINRJdTu81YfaSSwpuelYwo9hs89ySpRaei9Shef7XDF2VAQ9kF6nPnnsJ9g9h5KW4wTbTOya5XAxG8m3vuyOtzyLpp1nB46XM8aFxta2gqh%2BDrJrYfL6efjIHc%2BHZF%2BDg%2BUGa8tqK6%2BjEPIScP7Mv4XmmX4yUDiLwggn4CvjLoCe3F03cozaSU5T7EUl0J36jL6VfjmooUWCMnefqaKNlHsyJjUhQhRoOh1sCiojk1%2Fm%2BsurGkYyhKckaXSyrWJAYxCJEGluDRa1sjMFglQsAq%2BLw%2FilNBgCotyHrFtmYQh%2Fo03Nzq8nCBSUvly4wvwHwNMCVlSAXeplMr%2Bmyrc%2BnUcIndcQyOWjN6NXPojdrhyWWMVqDd4eJ8d0JJu4QLj1LObrpyVN%2Fa8BpTZh3DwTGVjMTbEetiOU2ce4XiD927rBOsK4J6M99ukXh8P3u8y%2BgYxWosP1dUwspnVyQY6pgHTKawWJiqArit9j3%2BM90Fhb5jCUOcM5JeE%2BVm0ZyICSQOv6AmdkaeBzJeFJIgLFW1DCOcBXqzxDk1udFfkr3nR4Sa4mV4ITf1IT8MMANOlMyjiNH%2FbvGCRRFZoD1Mkwpi9zltvYZyPtrLd%2BWo01lzo20u8yH3mVgLiPc4HuDvDQj4GccM9aAEJ1RG%2BrU%2FWYKOwVP%2Fm7QDaNnLS9IG8gPZNXOs4Z2J%2F&X-Amz-Signature=47ecd213e111340bce16ce5d5061671b4f7a9891731318bc90cb6344f8545d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PW63HEC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuoEBakltqi76JijdIDl8t%2B2MlzV5PpOOEsa8qvhFBiAiAZt1MpZ5Pv0kRKDeUgf13fC6eXAst%2Fed75meZbDpuf7iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP0d5T3vdFoKiMfi5KtwDfXyjR3yHh7b8EcJSk831gwQJUSrWChiRjXncQNSZEOTLtZzbH1N8KKGV71MG9DCcgOCL0Tfnl9wnJeldQX30hbscwRqG2y4GnuwogY7RatJxrYN45REeWYi6NAOVS5CaiVWy4HCz5lEoiTzRXXx6z5LcqVNuUT6NTgL3RLd7GKSkutHxQINRJdTu81YfaSSwpuelYwo9hs89ySpRaei9Shef7XDF2VAQ9kF6nPnnsJ9g9h5KW4wTbTOya5XAxG8m3vuyOtzyLpp1nB46XM8aFxta2gqh%2BDrJrYfL6efjIHc%2BHZF%2BDg%2BUGa8tqK6%2BjEPIScP7Mv4XmmX4yUDiLwggn4CvjLoCe3F03cozaSU5T7EUl0J36jL6VfjmooUWCMnefqaKNlHsyJjUhQhRoOh1sCiojk1%2Fm%2BsurGkYyhKckaXSyrWJAYxCJEGluDRa1sjMFglQsAq%2BLw%2FilNBgCotyHrFtmYQh%2Fo03Nzq8nCBSUvly4wvwHwNMCVlSAXeplMr%2Bmyrc%2BnUcIndcQyOWjN6NXPojdrhyWWMVqDd4eJ8d0JJu4QLj1LObrpyVN%2Fa8BpTZh3DwTGVjMTbEetiOU2ce4XiD927rBOsK4J6M99ukXh8P3u8y%2BgYxWosP1dUwspnVyQY6pgHTKawWJiqArit9j3%2BM90Fhb5jCUOcM5JeE%2BVm0ZyICSQOv6AmdkaeBzJeFJIgLFW1DCOcBXqzxDk1udFfkr3nR4Sa4mV4ITf1IT8MMANOlMyjiNH%2FbvGCRRFZoD1Mkwpi9zltvYZyPtrLd%2BWo01lzo20u8yH3mVgLiPc4HuDvDQj4GccM9aAEJ1RG%2BrU%2FWYKOwVP%2Fm7QDaNnLS9IG8gPZNXOs4Z2J%2F&X-Amz-Signature=4afe1638be501eadb3aac4becdd9b15a6621d7a963480acb4a36a935522cb298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

