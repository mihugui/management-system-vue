import request from "@/utils/request";

export function list(data) {
  return request({
    url: "base/user/list",
    method: "post",
    data
  });
}
