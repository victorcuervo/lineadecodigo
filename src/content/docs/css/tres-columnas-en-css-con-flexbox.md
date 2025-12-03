---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJG4IAE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIHdLbz3gBXdi3upl422mWJnI4n1%2FxDlHDi7mPS%2BuGrTTAiBYRY3ND6a7j63oAxdnnlsxizHshWMeMbATcrN0fy1CPyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMIdIzox51V18DdyLWKtwD7w%2BAmuVkBTRvH77skvZCl3B%2BeiEA2zkAbOuVFxVUXW19bGHXbzZ2w3xezzp8WWguqX7F3I4vFpIZ6qO2UKG6y%2Bnr6WptVwE7ByuusqARIR40hCdMmQfscwdeW4bJBLRRqRPWZ8N%2FRmv0aqRaSka%2BySUA%2BWiWg%2FpZ1J5W3b8w59MUuBr3ygUPEXWungfyy2HX2NVUCOC4SHNUJ3BCBpyt0ydL8GCbw1hCgC7YKxQH8vzywPnIlXXFsObc4HzDbmxnchkNQPP2cmtJHCpObW%2FloV8QycM81zLkqWE6XDOsgC%2FeNLTb8bun%2B0nzCwSrYXTvrsCrTXec7k0%2FcpFsatrlyR2sT%2Fz%2FaZf0NttaMp3iRtzuXFSqH1qJt3idv5RNzTkItpnfz1qbiXpFCaPcvgX15PzgyQ2AaNWUaGmC3sAT45pTcXXl7kvCFL7%2FBaAEPAy2z7AOpshJA8Akhck63OCbyzMi99kPhx%2Ff1K6cpqRqwnBNPwg7NFVvvb1zGlsaM1x%2F2Ct6OPhFrFYEk7%2BLyyqCAOrv%2BdJJX%2FUs9K%2BpHa960YgG4C8rRBDD6hU%2BPX8XUGovfH1uxcY4mJ%2FQ65c5g9ExrYuVYS7eHcnwG2BzH3FUwQIIiyhPcKZCYyjIG7EwwL3CyQY6pgGJwsDHwtOUnP84NcgrcYqaUekyDSVimzz1d0DyMwhbyW%2BU2EOoR3hF%2BH8WfN3PkVQ530oTB2TIEJ9rRAfCNn7o7%2BTcJWNvvqq%2FLZJcAeT%2BM278eOZlR0TUNtkIZYOA0EJ%2FuieVt0F9pTKFT%2B5Xvit8NTZRTz2h%2F3y%2B1AkcOfMkgikRS%2FLIpMP3pSY48qZgU5yzmhHhVIbuRT5sRD%2FEWGxTzF5RSycw&X-Amz-Signature=f6335ba36cb6b38c132301226d443c9f8df8200e7e28e54a79b7d0aa92d4025a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJG4IAE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIHdLbz3gBXdi3upl422mWJnI4n1%2FxDlHDi7mPS%2BuGrTTAiBYRY3ND6a7j63oAxdnnlsxizHshWMeMbATcrN0fy1CPyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMIdIzox51V18DdyLWKtwD7w%2BAmuVkBTRvH77skvZCl3B%2BeiEA2zkAbOuVFxVUXW19bGHXbzZ2w3xezzp8WWguqX7F3I4vFpIZ6qO2UKG6y%2Bnr6WptVwE7ByuusqARIR40hCdMmQfscwdeW4bJBLRRqRPWZ8N%2FRmv0aqRaSka%2BySUA%2BWiWg%2FpZ1J5W3b8w59MUuBr3ygUPEXWungfyy2HX2NVUCOC4SHNUJ3BCBpyt0ydL8GCbw1hCgC7YKxQH8vzywPnIlXXFsObc4HzDbmxnchkNQPP2cmtJHCpObW%2FloV8QycM81zLkqWE6XDOsgC%2FeNLTb8bun%2B0nzCwSrYXTvrsCrTXec7k0%2FcpFsatrlyR2sT%2Fz%2FaZf0NttaMp3iRtzuXFSqH1qJt3idv5RNzTkItpnfz1qbiXpFCaPcvgX15PzgyQ2AaNWUaGmC3sAT45pTcXXl7kvCFL7%2FBaAEPAy2z7AOpshJA8Akhck63OCbyzMi99kPhx%2Ff1K6cpqRqwnBNPwg7NFVvvb1zGlsaM1x%2F2Ct6OPhFrFYEk7%2BLyyqCAOrv%2BdJJX%2FUs9K%2BpHa960YgG4C8rRBDD6hU%2BPX8XUGovfH1uxcY4mJ%2FQ65c5g9ExrYuVYS7eHcnwG2BzH3FUwQIIiyhPcKZCYyjIG7EwwL3CyQY6pgGJwsDHwtOUnP84NcgrcYqaUekyDSVimzz1d0DyMwhbyW%2BU2EOoR3hF%2BH8WfN3PkVQ530oTB2TIEJ9rRAfCNn7o7%2BTcJWNvvqq%2FLZJcAeT%2BM278eOZlR0TUNtkIZYOA0EJ%2FuieVt0F9pTKFT%2B5Xvit8NTZRTz2h%2F3y%2B1AkcOfMkgikRS%2FLIpMP3pSY48qZgU5yzmhHhVIbuRT5sRD%2FEWGxTzF5RSycw&X-Amz-Signature=ba29a62ec1287ac7f48f59a6cad1f00875d732718e08b3f2ab6f3c53c69e921e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

