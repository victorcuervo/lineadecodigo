---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNAK3CTF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC2kGMOgZ61IPI5MWh6UyXrSAZvnxVQ1qWutM0Ta79D3AIhAMuUptmsZeanj%2BuDaFoE8AD4%2B8Nj4tyspq0WedWI%2Bol2Kv8DCDkQABoMNjM3NDIzMTgzODA1IgzG7ENqwg5ZnB9Vfhgq3ANhNszuZ2mNBYkc2NQhJtYNMbFDiosTFi%2FllPKNLYZtCcirQo3w33KZ4PWIi%2FcIUzRCqf05R93w2PlKBckO59MfWjNVE4HnOVQzhLZId%2Fxq4MtV%2BWMGC0E9notxUS2qC1PkYGlCNqGSXZ3uvqZNeG0CKWnrsGWoknkMaJXyA7sDF0Ebqe%2Bf7Rzeky54meMaAfz9Cd3Biv0tivoLpkK%2FMCXHPd5VO1AU0AJ1n8AZBTbHG3LRXcRd9DvsGDS%2FCaFZmZWJfTBiMBDhjUHMqcoT4bzRkP2geV93d3THgpT90Xl4BSTCNaaFP3SiRSH1vRA0UhZyypQZKUikMGMF5g%2FyPsJcHPuCyCtMxN8fQuN6nKQiy94LMg9L5iakGFUWlE2QFSgywc5oPCd7tP8wMbtrXic7DwZV%2BAWCV2cqDjScNXk7C77uG0PhkO5xf40XdQvdIJso65BrkCzRlbKS87ff5DZHy78FsC63EGJC2zt2Z99h3tlVZyYfIzd1HL%2B5SLf%2FkZYhz33rtWxeaDfLzyIFZZtYmywSW%2F7Z8WtwmscUp1M7pvmnX2LnsVIblFebmfiQ1SX9k4AIHZdOLHJHr%2BaF17%2FJ02yB4brVR%2FU%2BvMu7tfDtZiz4AqgQKGvYDSxBgzCblcPJBjqkASKIth8PQDkioe20%2Bzt1fkKulGz0D4glarj9YosGHmpgM4NbqRmP76xhaYklzUfaPL0VJH%2FlLcveZSZPX69jILerrNyTK4OONgk9BGtjk9DE0E8iTo2jrQLS8SnqFhEWW2tI14aepvnYZU5KnZFsdGWKkyT901P38cBrHPk7AvJ2iLob4gdWCzu5Ov%2BJyXlIm5pIEneQbCpF9eaemPYqs%2FAy03oW&X-Amz-Signature=ad00c6e3e1f3380a59118208e0c251e44961b5db0ee6808a12fb4de9a71329a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNAK3CTF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC2kGMOgZ61IPI5MWh6UyXrSAZvnxVQ1qWutM0Ta79D3AIhAMuUptmsZeanj%2BuDaFoE8AD4%2B8Nj4tyspq0WedWI%2Bol2Kv8DCDkQABoMNjM3NDIzMTgzODA1IgzG7ENqwg5ZnB9Vfhgq3ANhNszuZ2mNBYkc2NQhJtYNMbFDiosTFi%2FllPKNLYZtCcirQo3w33KZ4PWIi%2FcIUzRCqf05R93w2PlKBckO59MfWjNVE4HnOVQzhLZId%2Fxq4MtV%2BWMGC0E9notxUS2qC1PkYGlCNqGSXZ3uvqZNeG0CKWnrsGWoknkMaJXyA7sDF0Ebqe%2Bf7Rzeky54meMaAfz9Cd3Biv0tivoLpkK%2FMCXHPd5VO1AU0AJ1n8AZBTbHG3LRXcRd9DvsGDS%2FCaFZmZWJfTBiMBDhjUHMqcoT4bzRkP2geV93d3THgpT90Xl4BSTCNaaFP3SiRSH1vRA0UhZyypQZKUikMGMF5g%2FyPsJcHPuCyCtMxN8fQuN6nKQiy94LMg9L5iakGFUWlE2QFSgywc5oPCd7tP8wMbtrXic7DwZV%2BAWCV2cqDjScNXk7C77uG0PhkO5xf40XdQvdIJso65BrkCzRlbKS87ff5DZHy78FsC63EGJC2zt2Z99h3tlVZyYfIzd1HL%2B5SLf%2FkZYhz33rtWxeaDfLzyIFZZtYmywSW%2F7Z8WtwmscUp1M7pvmnX2LnsVIblFebmfiQ1SX9k4AIHZdOLHJHr%2BaF17%2FJ02yB4brVR%2FU%2BvMu7tfDtZiz4AqgQKGvYDSxBgzCblcPJBjqkASKIth8PQDkioe20%2Bzt1fkKulGz0D4glarj9YosGHmpgM4NbqRmP76xhaYklzUfaPL0VJH%2FlLcveZSZPX69jILerrNyTK4OONgk9BGtjk9DE0E8iTo2jrQLS8SnqFhEWW2tI14aepvnYZU5KnZFsdGWKkyT901P38cBrHPk7AvJ2iLob4gdWCzu5Ov%2BJyXlIm5pIEneQbCpF9eaemPYqs%2FAy03oW&X-Amz-Signature=0528ba6312cddad9ed15e5b301789e3c4eb7944c1beb44a4b874e72ba6277f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

