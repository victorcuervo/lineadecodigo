---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHDR2LU5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwyavAZ2zFPfWje26hf4IU1q9dY5bpJ%2BRPomUyHHwc%2FAIhAJ2GqQx%2F5%2FVNXcgYzBnMBJIRwJIPyHaIKGKTBW7%2B6NQmKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTW8cy1PlTTGAOdioq3ANsxEa%2FKXx3LZ7TyK9oCEX0nIcFoNOf4i1sRNqc1L4PgZYn%2BBUTjbR5g7%2FymlKkhFrIDcD3Nskv4Qyh1D4auS%2BdYhiSKCCojTooT49jmhU6gKBr8Aq8Sn7UV%2BOMuOjwbiL5kgOQ3x10QSlbUTvS%2B%2B2l8q0pbqy07YlTVKthlFrhXqVqF%2B3u7jCD65hfr%2FeJyzTlCjoj1kj40S44TguAYGKA4WQIP59WKetTzSh0XbDeUQsiZ5toxI751g6odcY4bz6XodcWYDSizgJGRL3hjG6iSnqowa1Pam4Q8Ubkimb7EEikiAsQIetIsKYIIPfGH3F5IU%2F05s8vvGQndqPIamzMnuH%2BFaPxeV4Qg5IcycU9OnxC43lR1Ym2aTsAATliBzEPwqN14MTLSg%2FfV1oArrUeTiizXU3k0fDmCoq8ShpX%2BIIrB2rskuOKT3pCNoMmJ5K4M0uczekDIBs6qmgorYwqJknadcbk4Msz%2BpO12M3Pppu7vCvbelnxx2il36dvp7UxWcHF7Fh3K5qiPo5TdwG8XRgnbiYir10F7kXiJXXEbOOhNz%2B%2FM6zEZ6asBY5f%2FI%2B2R127dvcVBrYdcWFwyne3vmDQlAVfbRFkgMm5u%2F3vEkr4ganpPHv8quT8rDDS%2FdLJBjqkAa6oBYPIwvNG%2F8FLAb3nYw7AbmElR1MD1MLxiL3QZB9Ft4W%2BlHSo2cOQs0HDT%2BRn4sYuanGAjQQT6UndUSVRTCLjRD1D1G32nUwZFblsVkeaJ%2BChpT3UdRHVJcmR4N6WmIofH6cdUHC1SgsaZ2LzRBNIncVzgey3u3f4wu4RgpZMMAPYhOuDrT3HLhY3pDNVik2kXQQht0oprzHq9XrkYYIQUUbZ&X-Amz-Signature=c802490ed30a1265a50a45d002eec3a1ba7dd7c65029ec932c135148f31d43ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHDR2LU5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwyavAZ2zFPfWje26hf4IU1q9dY5bpJ%2BRPomUyHHwc%2FAIhAJ2GqQx%2F5%2FVNXcgYzBnMBJIRwJIPyHaIKGKTBW7%2B6NQmKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTW8cy1PlTTGAOdioq3ANsxEa%2FKXx3LZ7TyK9oCEX0nIcFoNOf4i1sRNqc1L4PgZYn%2BBUTjbR5g7%2FymlKkhFrIDcD3Nskv4Qyh1D4auS%2BdYhiSKCCojTooT49jmhU6gKBr8Aq8Sn7UV%2BOMuOjwbiL5kgOQ3x10QSlbUTvS%2B%2B2l8q0pbqy07YlTVKthlFrhXqVqF%2B3u7jCD65hfr%2FeJyzTlCjoj1kj40S44TguAYGKA4WQIP59WKetTzSh0XbDeUQsiZ5toxI751g6odcY4bz6XodcWYDSizgJGRL3hjG6iSnqowa1Pam4Q8Ubkimb7EEikiAsQIetIsKYIIPfGH3F5IU%2F05s8vvGQndqPIamzMnuH%2BFaPxeV4Qg5IcycU9OnxC43lR1Ym2aTsAATliBzEPwqN14MTLSg%2FfV1oArrUeTiizXU3k0fDmCoq8ShpX%2BIIrB2rskuOKT3pCNoMmJ5K4M0uczekDIBs6qmgorYwqJknadcbk4Msz%2BpO12M3Pppu7vCvbelnxx2il36dvp7UxWcHF7Fh3K5qiPo5TdwG8XRgnbiYir10F7kXiJXXEbOOhNz%2B%2FM6zEZ6asBY5f%2FI%2B2R127dvcVBrYdcWFwyne3vmDQlAVfbRFkgMm5u%2F3vEkr4ganpPHv8quT8rDDS%2FdLJBjqkAa6oBYPIwvNG%2F8FLAb3nYw7AbmElR1MD1MLxiL3QZB9Ft4W%2BlHSo2cOQs0HDT%2BRn4sYuanGAjQQT6UndUSVRTCLjRD1D1G32nUwZFblsVkeaJ%2BChpT3UdRHVJcmR4N6WmIofH6cdUHC1SgsaZ2LzRBNIncVzgey3u3f4wu4RgpZMMAPYhOuDrT3HLhY3pDNVik2kXQQht0oprzHq9XrkYYIQUUbZ&X-Amz-Signature=27a95779dd43ab409d90227b455a818b1c19e4402e4fc9ca5890bd81ac878869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

