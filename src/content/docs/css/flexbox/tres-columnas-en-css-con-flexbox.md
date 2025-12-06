---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVXX6WOR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAdjAFCFhHYvdfsV8hFVcikP0dgPOeK8uUvss6O%2Fo0fAiEA0tf1IBYEwhg3dey%2FM%2BZyyKOKXFV3yg7Wwn2CLwVVgaQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNBzxGArGUnzmOx27SrcAz%2FJKEzxG372BKvFtLEd8Ss12dMBMCzoRWH%2FX%2BGxKiEQgFlcPMZZtHdpUtf5j%2Bh%2FkFRRmqdTqFOLxfdYhCY%2BB97T4jd5Vxh8FRWEJ%2FMaL6PyJa2V%2Bp4LvwHdcbtNguCKnzRNX3Hby090kjCz56MW6Eg%2F5g%2FhzovBigHtTQR%2BxhzeIOrpeDbDqLKk%2Fr3R1HCuzDu0njpzNtGBbb%2FITtBU2bsN%2B5jep1XqxLEBLY8Bl34CJBxhfQ35vxwyByAaq%2FoagbHl%2BQ2UPoYAyl22Mus06Hif54nujlJJnXCqiNLSMlJO3BYxko6gEVbzzz5z10qWAs47R0MVuhBN1hG5rPbR3AeGhT2twcKECnprXO8Q1adgbq2DNi09afYgQpU1TB%2BZ2O6DA5LFBNmseWBrAOUoz%2BTFjrumm76H%2FLZ2XUdUDup0efZKDmpfq5qz8GkFG3YZRRlmgbR5J%2F19uzly%2Bvm4DeBt6FbpoW%2B2gNlL%2Fy6tJ%2FrnnQAigfh%2BQliV4mUqoAFJFjjmAizoPysTDt2bJ5xxf8fl6cCsuo2hOZrw4giPPoik149NbLRzI21bmQBFA%2F1DXQ4hZL%2FwZGA6E8thqiXRPmiwsJOCkX%2BTGmTGaB5tGROKWtyfOzcgXwBSRTOHMNam0MkGOqUBeXzRQnJDH1CrWzxSUk%2B3IgktYrjL9DRG41Vj6tZvdiI%2BIH3iXo6gr62FNoHQgnql%2BKjIXgoaY2ka6EwGaQANXiP2jXpkKPbp4pyKYgCuwC9oE3LvGS5fIr%2BK9mFoVZRNFbmw%2FImLpdU%2FajXoLBLldx1N88ZqEAMWXwLX%2F3hzxiGgWvSY9X8NRYUTogCbn1cc3%2F1ZvxiTNynIGDXOUrJYd5c1bCfb&X-Amz-Signature=d4e584444764ca7868cfa4dc70a19f9f7254944f00da9e2ad5f951df5df9c463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVXX6WOR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAdjAFCFhHYvdfsV8hFVcikP0dgPOeK8uUvss6O%2Fo0fAiEA0tf1IBYEwhg3dey%2FM%2BZyyKOKXFV3yg7Wwn2CLwVVgaQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNBzxGArGUnzmOx27SrcAz%2FJKEzxG372BKvFtLEd8Ss12dMBMCzoRWH%2FX%2BGxKiEQgFlcPMZZtHdpUtf5j%2Bh%2FkFRRmqdTqFOLxfdYhCY%2BB97T4jd5Vxh8FRWEJ%2FMaL6PyJa2V%2Bp4LvwHdcbtNguCKnzRNX3Hby090kjCz56MW6Eg%2F5g%2FhzovBigHtTQR%2BxhzeIOrpeDbDqLKk%2Fr3R1HCuzDu0njpzNtGBbb%2FITtBU2bsN%2B5jep1XqxLEBLY8Bl34CJBxhfQ35vxwyByAaq%2FoagbHl%2BQ2UPoYAyl22Mus06Hif54nujlJJnXCqiNLSMlJO3BYxko6gEVbzzz5z10qWAs47R0MVuhBN1hG5rPbR3AeGhT2twcKECnprXO8Q1adgbq2DNi09afYgQpU1TB%2BZ2O6DA5LFBNmseWBrAOUoz%2BTFjrumm76H%2FLZ2XUdUDup0efZKDmpfq5qz8GkFG3YZRRlmgbR5J%2F19uzly%2Bvm4DeBt6FbpoW%2B2gNlL%2Fy6tJ%2FrnnQAigfh%2BQliV4mUqoAFJFjjmAizoPysTDt2bJ5xxf8fl6cCsuo2hOZrw4giPPoik149NbLRzI21bmQBFA%2F1DXQ4hZL%2FwZGA6E8thqiXRPmiwsJOCkX%2BTGmTGaB5tGROKWtyfOzcgXwBSRTOHMNam0MkGOqUBeXzRQnJDH1CrWzxSUk%2B3IgktYrjL9DRG41Vj6tZvdiI%2BIH3iXo6gr62FNoHQgnql%2BKjIXgoaY2ka6EwGaQANXiP2jXpkKPbp4pyKYgCuwC9oE3LvGS5fIr%2BK9mFoVZRNFbmw%2FImLpdU%2FajXoLBLldx1N88ZqEAMWXwLX%2F3hzxiGgWvSY9X8NRYUTogCbn1cc3%2F1ZvxiTNynIGDXOUrJYd5c1bCfb&X-Amz-Signature=d43f48a1c8cea809f1583595dea791ed8e5afa0016a224f40e1c54986ed5a342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

