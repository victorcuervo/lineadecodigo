---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSYWEJU2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE139ReSYY%2FzK%2FyIr9J%2F8O1ho2MiHvlpAFGh0f8%2BISK%2BAiAU%2FuIHrmowQ36a4RgNGUHe4VuDlyPoCKXUYT5MFW7o5yr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM%2FETMItrDEDPaoCNcKtwDH1Zf8S5ae8BpKMHp6ZtouHyiOoQ%2B5iTwsC4jsXOU4sjFGb9V8bVGSFtqeEcpDvL4w9O8Ks8Qrv7CM%2F8v%2B09sJqufRFQbaiWejBTLK2fbYB7gIrIjYKkH83XSJ8A66b8zwNz75FargVdVvPOvxSSGNtCwdypLhjxHm2pXh7NQAhihcjj7b7YNqgxkyQL%2BmCG3Kj4lteHuIqZmHsikKM8T4dyDFJ48U5o%2Fbua%2B44GMIn5Ab212XUDlKoOv5jyIcdWivW65AEpYmpHJz262aZyaY3a6fLWjzJJn3sZ8sq%2Fx9gGHsXWW2%2BC7cLP2xaCHmNrkM973oy6pLK4yo526c2OPidlHKZeEau0h%2FRSK1KJszHwwRwgqMKfxs3eFWYrzOQ1VDaPN5oKz5KbE1sLMXs2hc2oeUdM4hORIdvsHSVED%2BIS5IGsQNCxs%2BItnCDtoV%2BH2VkRPY%2Bxz%2FfJ%2BPLn86rF7IKrZyI%2BrHwmVCz738%2BxzfidZEeGsB7%2BJfQuvLjSsM0PIspVDLgvP%2BXVxLlvSFxo6X5bCfdjiXmt9Lmqw9ntM2SgYw8iAC73yXhcFlL0lRh8DxFH5rRytXfkyywABbA9F%2BXfPpCvNgi5bsn7WaAXexpMA17%2BuOedM%2FSaNPh0wxMzRyQY6pgGdNSkE4Fvi34%2Fe%2FES4XYKpibEXuqul51eIxmzEETZ%2FeUnOcZ7N0XagHH%2B6z%2B7BhCGxTgsRZTujQTmVYI0%2B6TTRYWKEz7aOlJb9KW1k9ZmTmx2kokFR2aakckq2nQ%2F52iT1R%2FrvoIvf20BD8XrflytyOOmoddnmCjE5yC8Pxwa1ryymLDIFEpnTZaI0uj1Ji5rv1lR8jfY5JrT8Magy7MTASXKLqiKZ&X-Amz-Signature=d7e6fa6946c728f13d30bbe85a979449ed998e3977fac0a396221092e361cbc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSYWEJU2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE139ReSYY%2FzK%2FyIr9J%2F8O1ho2MiHvlpAFGh0f8%2BISK%2BAiAU%2FuIHrmowQ36a4RgNGUHe4VuDlyPoCKXUYT5MFW7o5yr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM%2FETMItrDEDPaoCNcKtwDH1Zf8S5ae8BpKMHp6ZtouHyiOoQ%2B5iTwsC4jsXOU4sjFGb9V8bVGSFtqeEcpDvL4w9O8Ks8Qrv7CM%2F8v%2B09sJqufRFQbaiWejBTLK2fbYB7gIrIjYKkH83XSJ8A66b8zwNz75FargVdVvPOvxSSGNtCwdypLhjxHm2pXh7NQAhihcjj7b7YNqgxkyQL%2BmCG3Kj4lteHuIqZmHsikKM8T4dyDFJ48U5o%2Fbua%2B44GMIn5Ab212XUDlKoOv5jyIcdWivW65AEpYmpHJz262aZyaY3a6fLWjzJJn3sZ8sq%2Fx9gGHsXWW2%2BC7cLP2xaCHmNrkM973oy6pLK4yo526c2OPidlHKZeEau0h%2FRSK1KJszHwwRwgqMKfxs3eFWYrzOQ1VDaPN5oKz5KbE1sLMXs2hc2oeUdM4hORIdvsHSVED%2BIS5IGsQNCxs%2BItnCDtoV%2BH2VkRPY%2Bxz%2FfJ%2BPLn86rF7IKrZyI%2BrHwmVCz738%2BxzfidZEeGsB7%2BJfQuvLjSsM0PIspVDLgvP%2BXVxLlvSFxo6X5bCfdjiXmt9Lmqw9ntM2SgYw8iAC73yXhcFlL0lRh8DxFH5rRytXfkyywABbA9F%2BXfPpCvNgi5bsn7WaAXexpMA17%2BuOedM%2FSaNPh0wxMzRyQY6pgGdNSkE4Fvi34%2Fe%2FES4XYKpibEXuqul51eIxmzEETZ%2FeUnOcZ7N0XagHH%2B6z%2B7BhCGxTgsRZTujQTmVYI0%2B6TTRYWKEz7aOlJb9KW1k9ZmTmx2kokFR2aakckq2nQ%2F52iT1R%2FrvoIvf20BD8XrflytyOOmoddnmCjE5yC8Pxwa1ryymLDIFEpnTZaI0uj1Ji5rv1lR8jfY5JrT8Magy7MTASXKLqiKZ&X-Amz-Signature=3dd5433debdaf67eb9b8bf3c40595cd4032d0e77e7faef35303bbd0f24a35b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

