---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYZ47WMM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXcfh0wdxPWzk%2F1sKHWWycoubEfLIKsSLrMIT%2BsN4rJAiEA6UBhbI0cm4RnUCTuqzI1qpTTeaSLt78XZ68DuYHGD08qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvjVEA6JJadrZZFuCrcA0Ii4wv2exV70KksueVHd%2BlqMsKzGDL6SxgsG%2FwS2eDAkJ%2BbTRC8kuKXwlWmtI8C3TUBLgt3l%2BRg8gLGF4W%2BefeVX3F0moLieODcHrblx8nM9wGOmuCWKNi4aTC5BRCRa6VmQS64e304flrYPRBF3dpbfblH3BM5Gj%2BF8BVKGTpOtqAJPSCDHXRn1zpb23d4wBvFxfpr1PBtIqPdILeuygizvO64hJz1Uwo8bOQ%2BHp0MvWgnQrqHIVrlGYw74QDJT5EU0XwJ4Ko9rMEizRGQtCNBg3Uw1Ngd3fV7m1yv1jUyVIg%2BW9Q3nM0atyMq%2FhhVaWPqErw1gJZPTHJQ8F6ytdxfUueQzSQwcyMrQCbxKzFufVD7uirrwqVQWuJUWX0AeQ1cMqVGmSLBfZw1dw0E%2FQopF052MEUsHDKQDTIkpBpcvdVAquq6FFNZGjhLPCufns0S1ichUb6h9%2FdKo4sHb0FlirShe3jNzzZEpaHhlALf4j62Q%2Fe%2FWTYJwbRyAE1uGTG8O%2F2qz5qfFaX0v5C6Ou3JXQepsH1F%2FvMYF1XiKNOeqcXsg55dbEms5JWWSLdd9WhT28ACej%2FgEWjzuW5zoRXID4AkjxbBHegBye4frUKF1JxbQOiAsr4fFjawMIjR2ckGOqUBElzjSozYm73GrvRos6MxnYIW9FUSr9vkwkFjhQfnBkbkxQXqqW9QaUFZteKSY%2BZYFQ3lIgyYIJ1M4njM7A7MscrYZNDT4tyY6ShB0VG2PZM2NX2xM4Qv%2FyBEVNt%2FP%2B7MGABTtlqqeoBamnyJ0ncCh44ympDQnB%2B9tUsWk05JbPW78kBxB85idmh4I8R1xsufix85smAWNIao3RCWBlFfPB0VfbwD&X-Amz-Signature=a4284e1bbd5a4a7bef319c1ef9c42374a2f1ef28aed968af78e9d4aa3644700f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYZ47WMM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXcfh0wdxPWzk%2F1sKHWWycoubEfLIKsSLrMIT%2BsN4rJAiEA6UBhbI0cm4RnUCTuqzI1qpTTeaSLt78XZ68DuYHGD08qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvjVEA6JJadrZZFuCrcA0Ii4wv2exV70KksueVHd%2BlqMsKzGDL6SxgsG%2FwS2eDAkJ%2BbTRC8kuKXwlWmtI8C3TUBLgt3l%2BRg8gLGF4W%2BefeVX3F0moLieODcHrblx8nM9wGOmuCWKNi4aTC5BRCRa6VmQS64e304flrYPRBF3dpbfblH3BM5Gj%2BF8BVKGTpOtqAJPSCDHXRn1zpb23d4wBvFxfpr1PBtIqPdILeuygizvO64hJz1Uwo8bOQ%2BHp0MvWgnQrqHIVrlGYw74QDJT5EU0XwJ4Ko9rMEizRGQtCNBg3Uw1Ngd3fV7m1yv1jUyVIg%2BW9Q3nM0atyMq%2FhhVaWPqErw1gJZPTHJQ8F6ytdxfUueQzSQwcyMrQCbxKzFufVD7uirrwqVQWuJUWX0AeQ1cMqVGmSLBfZw1dw0E%2FQopF052MEUsHDKQDTIkpBpcvdVAquq6FFNZGjhLPCufns0S1ichUb6h9%2FdKo4sHb0FlirShe3jNzzZEpaHhlALf4j62Q%2Fe%2FWTYJwbRyAE1uGTG8O%2F2qz5qfFaX0v5C6Ou3JXQepsH1F%2FvMYF1XiKNOeqcXsg55dbEms5JWWSLdd9WhT28ACej%2FgEWjzuW5zoRXID4AkjxbBHegBye4frUKF1JxbQOiAsr4fFjawMIjR2ckGOqUBElzjSozYm73GrvRos6MxnYIW9FUSr9vkwkFjhQfnBkbkxQXqqW9QaUFZteKSY%2BZYFQ3lIgyYIJ1M4njM7A7MscrYZNDT4tyY6ShB0VG2PZM2NX2xM4Qv%2FyBEVNt%2FP%2B7MGABTtlqqeoBamnyJ0ncCh44ympDQnB%2B9tUsWk05JbPW78kBxB85idmh4I8R1xsufix85smAWNIao3RCWBlFfPB0VfbwD&X-Amz-Signature=3ec620c59996ca6788c8e4eb50dd0b142bdb45dae9b9c377504251af39fa51ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

