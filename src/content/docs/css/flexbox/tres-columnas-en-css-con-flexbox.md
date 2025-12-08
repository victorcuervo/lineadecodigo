---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMOERJZS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm5tCWqrT%2FJqvO8f5ww5aQ4bhrvg%2BqL%2B%2B2P4PdB1CJNAiATsjwThHXk4%2FbAzv200h2X8ESoMbZozOoxg5bMUeTlFiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQbnd%2BKtLJzuULVuCKtwDMw9CJDIV%2BuwtZt3UgAN1CIwO3FrqgMVyz96ICIwapTBlInCLDqSz2DW8HeJYKJ83d0XAnidKMxrDuu5AxH7Z3Dd7wjmbid6VLZ8DzSQCJ0j3BTm8hBUHTwkaWtfxltd4Oan2lZ3qm6mFfulMdw5UCWmkpXRQ7adOgHKeUDepo%2BnHpPxLQvEM7AYcF4tE9lI2IXXJVg%2Bid%2FwUV1Df4OumplG5ApgU5E66rbRVMtp4Co0CVXtf8j6eWtJEGd5ArPYA3byjKkhGqooUlVu%2BZdWjlLUqJion97AzTN8yH6pp1odjLskI2sDowMuHEVKX1Ud97Cz5cvG1Ow6vZCBwBn2m5FCST50LXBaLqVMQl9zxe5XUdiYhrIsPkaio6%2B3BsyGWxMB%2BR%2BHWU2CvBO9ocaFaYWSURbW1jDJgyJnqtlvRJGfxKnCAB9hp%2FcY%2BF40RG4BxFNg3pCWcBfwqqYjJ4bDCoJrgqEnRrTVI%2FddxKMRyMQa%2BNmMJB%2BfCDIUazy6GiRz6TMmzk4GgsgBmsifyWF8McQwy9m2Fr8q3I833lLxs7ChDJi9zNdgIu5%2BO4%2FpKl%2B7b1pwErLpLxtGPPTuU7iO1eZokzSlUWryZ5I7vKmmjXISfzFy%2BssI9yo5%2F5mkw8c%2FZyQY6pgGBuYPG3m2oXWAtU4sEMTy5F2Dpm%2Bhx5jSbtbl1Yu303RzuN%2FkLQTVbK53A7j5hcKTdg1nW7jlC8FpsaON9iEztyOJp8qSsyAno7ks0uE22%2B7Hq739W6zPzXHFIawUUC30xWDEQSzJ0Tzr%2BpYl4e6C8j%2BGP1y0aThO027mCnmr7DRSBO0FS4NNY%2BdIaUHTbnyP8HZVSuJWWWMmk8iCETJ8XCeuRs1xD&X-Amz-Signature=9a6dc3b7124fe6f775b6ae605cd52eab46d6bca4949cef4593039aa7f9d02125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMOERJZS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm5tCWqrT%2FJqvO8f5ww5aQ4bhrvg%2BqL%2B%2B2P4PdB1CJNAiATsjwThHXk4%2FbAzv200h2X8ESoMbZozOoxg5bMUeTlFiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQbnd%2BKtLJzuULVuCKtwDMw9CJDIV%2BuwtZt3UgAN1CIwO3FrqgMVyz96ICIwapTBlInCLDqSz2DW8HeJYKJ83d0XAnidKMxrDuu5AxH7Z3Dd7wjmbid6VLZ8DzSQCJ0j3BTm8hBUHTwkaWtfxltd4Oan2lZ3qm6mFfulMdw5UCWmkpXRQ7adOgHKeUDepo%2BnHpPxLQvEM7AYcF4tE9lI2IXXJVg%2Bid%2FwUV1Df4OumplG5ApgU5E66rbRVMtp4Co0CVXtf8j6eWtJEGd5ArPYA3byjKkhGqooUlVu%2BZdWjlLUqJion97AzTN8yH6pp1odjLskI2sDowMuHEVKX1Ud97Cz5cvG1Ow6vZCBwBn2m5FCST50LXBaLqVMQl9zxe5XUdiYhrIsPkaio6%2B3BsyGWxMB%2BR%2BHWU2CvBO9ocaFaYWSURbW1jDJgyJnqtlvRJGfxKnCAB9hp%2FcY%2BF40RG4BxFNg3pCWcBfwqqYjJ4bDCoJrgqEnRrTVI%2FddxKMRyMQa%2BNmMJB%2BfCDIUazy6GiRz6TMmzk4GgsgBmsifyWF8McQwy9m2Fr8q3I833lLxs7ChDJi9zNdgIu5%2BO4%2FpKl%2B7b1pwErLpLxtGPPTuU7iO1eZokzSlUWryZ5I7vKmmjXISfzFy%2BssI9yo5%2F5mkw8c%2FZyQY6pgGBuYPG3m2oXWAtU4sEMTy5F2Dpm%2Bhx5jSbtbl1Yu303RzuN%2FkLQTVbK53A7j5hcKTdg1nW7jlC8FpsaON9iEztyOJp8qSsyAno7ks0uE22%2B7Hq739W6zPzXHFIawUUC30xWDEQSzJ0Tzr%2BpYl4e6C8j%2BGP1y0aThO027mCnmr7DRSBO0FS4NNY%2BdIaUHTbnyP8HZVSuJWWWMmk8iCETJ8XCeuRs1xD&X-Amz-Signature=ca59b342ea7f828d9814c863ab5f6a1365c4ec69f9373ff2268e8f220a7e1ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

