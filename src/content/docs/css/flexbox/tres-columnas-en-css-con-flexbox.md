---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624U2TEAK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICipjI%2Foq0xjTM%2BdRORZ7sgwOCcEuSRlHB%2FP5K%2Fskru3AiBy4NTkP9AErIrR7wJkqn8QkgLmgqccTueldvFOrgwWWSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMzS0u0JW3mYdlabVsKtwDjpsNv%2BfsI6T6frdf8%2BDvRRrbjF3vT%2Bo%2FhXHKcR66K5d3cGBBxz653IJWs3DnbOY1Cw4xCC80U8rhuhEeUUyS6SfkizWHwGQ3S2n40RulREmfERof50qe%2B2Ij%2BVkuRrOLYsrjQhcLhyg1Hqycn5TQpzg5tY2fQmfMDHjs7S4UC6zc0LklBwsVLl1zKKlhbGBSqdRLLevYhmtHt75SBybRaGWSeH3TTraKdqzBcURFgfg77Vk5AbXK1AiTG0Q1NxTMkvOEsB0vDnULCqjb4bdP%2BNY33pWaf6KIyTrMbFYqF56z1SV9nTIkFRUOX1ZX8N%2BpUSSztnmv%2FI%2Bxp8VmLclw6nWa5sSXUnZzlwNgOnUmfj2b4hFJ6pcFiuZ5AcvvrVlpaJBtFtP6Enfo5OCDPDQXDICbU6ObpM2iOV6UqlwRaq0Lx%2BcyNfvjz07n3wTZYwt4kLSODnMxq%2BPuloTMyOnVv6hpnH6MAT0ao0KRDsnmGE7qUfJuHVqlY7tDimchvoJfJAyVXxdxAphM7CFBn%2BTwRM6wTbYCsjqKA%2BHcjFRrfQCnWwQYFhEz5QsSPRx9fkv9qVBK4EfGxfz%2FPIPIPEDap7MdxeQJAyrchftIWH6Tc3eMaYdPeADVTNjVNwkwwqLGyQY6pgF12VOyVeOlGI9N8tY%2F%2B5qGl4J6fUD3zHvnHPCCb40qptswJU7cC0zwbRCq5lgSgQ6izBWDm7ETdsSmVbH2z2Jsgxb0%2FPsepNtL%2FIn%2BEnTF7f3BzEuNm9RfJOmR%2B8TiClUH%2Bax6OBbybrvJ7BVJW8r2a78qOj8beU3vnoqMMjRT5T4FNxAqLzRSGVwmp6xminreadcmb9evW07nYYVqHNF5R7cufITV&X-Amz-Signature=f98da8e29f3386fbfe0c6221cff16a413285a87918f4a1cd4d67ff7d1c0fbc86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624U2TEAK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICipjI%2Foq0xjTM%2BdRORZ7sgwOCcEuSRlHB%2FP5K%2Fskru3AiBy4NTkP9AErIrR7wJkqn8QkgLmgqccTueldvFOrgwWWSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMzS0u0JW3mYdlabVsKtwDjpsNv%2BfsI6T6frdf8%2BDvRRrbjF3vT%2Bo%2FhXHKcR66K5d3cGBBxz653IJWs3DnbOY1Cw4xCC80U8rhuhEeUUyS6SfkizWHwGQ3S2n40RulREmfERof50qe%2B2Ij%2BVkuRrOLYsrjQhcLhyg1Hqycn5TQpzg5tY2fQmfMDHjs7S4UC6zc0LklBwsVLl1zKKlhbGBSqdRLLevYhmtHt75SBybRaGWSeH3TTraKdqzBcURFgfg77Vk5AbXK1AiTG0Q1NxTMkvOEsB0vDnULCqjb4bdP%2BNY33pWaf6KIyTrMbFYqF56z1SV9nTIkFRUOX1ZX8N%2BpUSSztnmv%2FI%2Bxp8VmLclw6nWa5sSXUnZzlwNgOnUmfj2b4hFJ6pcFiuZ5AcvvrVlpaJBtFtP6Enfo5OCDPDQXDICbU6ObpM2iOV6UqlwRaq0Lx%2BcyNfvjz07n3wTZYwt4kLSODnMxq%2BPuloTMyOnVv6hpnH6MAT0ao0KRDsnmGE7qUfJuHVqlY7tDimchvoJfJAyVXxdxAphM7CFBn%2BTwRM6wTbYCsjqKA%2BHcjFRrfQCnWwQYFhEz5QsSPRx9fkv9qVBK4EfGxfz%2FPIPIPEDap7MdxeQJAyrchftIWH6Tc3eMaYdPeADVTNjVNwkwwqLGyQY6pgF12VOyVeOlGI9N8tY%2F%2B5qGl4J6fUD3zHvnHPCCb40qptswJU7cC0zwbRCq5lgSgQ6izBWDm7ETdsSmVbH2z2Jsgxb0%2FPsepNtL%2FIn%2BEnTF7f3BzEuNm9RfJOmR%2B8TiClUH%2Bax6OBbybrvJ7BVJW8r2a78qOj8beU3vnoqMMjRT5T4FNxAqLzRSGVwmp6xminreadcmb9evW07nYYVqHNF5R7cufITV&X-Amz-Signature=05739762b853998aac625042a18be1918d020359a260165e8ba357ddb8e4bb0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

